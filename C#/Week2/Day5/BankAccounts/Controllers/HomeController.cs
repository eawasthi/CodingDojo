using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Linq;
using BankAccounts.Models;

namespace BankAccounts.Controllers
{
    public class HomeController : Controller
    {
         private AccountContext _context;
 
        public HomeController(AccountContext context)
        {
            _context = context;
        }
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            ViewBag.Errors = new List<string>();
            return View();
        }


        [HttpPost]
        [Route("/process")]
        public IActionResult Process(RegisterViewModel model)
        {
            if(ModelState.IsValid)
            {
                Person NewPerson = new Person
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Email = model.Email,
                    Password = model.Password,
                    Created_at =DateTime.Now,
                    Updated_at = DateTime.Now,
                };
                HttpContext.Session.SetString("UserName", model.FirstName);
                _context.Users.Add(NewPerson);
                _context.SaveChanges();
                List<Person> ReturnedUser = _context.Users.Where(user => user.Email == model.Email).ToList();
                HttpContext.Session.SetInt32("UserId", ReturnedUser[0].id);
                return RedirectToAction("Account");
            }
            else
            {
                ViewBag.Errors = ModelState.Values;
                return View("Index");
            }
        }
        [HttpGet]
        [Route("/account")]
        public IActionResult Account()
        {
            ViewBag.UserName =HttpContext.Session.GetString("UserName");
            List<Account> AccountInfo = _context.BankAccounts.Where(account => account.User_id == (int)HttpContext.Session.GetInt32("UserId")).OrderByDescending(i => i.Created_at).ToList();
            ViewBag.info = AccountInfo;
            int Sum = 0;
            for(var i = 0; i < AccountInfo.Count; i++)
            {     
                 Sum += AccountInfo[i].Amount;
            }
            ViewBag.sum = Sum;
            return View();
        }

        [HttpGet]
        [Route("/login")]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [Route("/loginprocess")]
        public IActionResult Loginprocess(string Email, string Password)
        {
             List<Person> ReturnedUserEmail = _context.Users.Where(user => user.Email == Email).ToList();
             if(ReturnedUserEmail.Count > 0)
             {
                 if(ReturnedUserEmail[0].Password == Password)
                 {
                    HttpContext.Session.SetString("UserName", ReturnedUserEmail[0].FirstName);
                    HttpContext.Session.SetInt32("UserId", ReturnedUserEmail[0].id);
                    return RedirectToAction("Account");
                 }
                 else
                 {
                    ViewBag.LoginPWErrors = "Password is invalid!"; 
                    return View("login");
                 }
             }
            else
            {
                ViewBag.LoginEmailErrors = "Email is invalid!"; 
                return View("login");
            }

        }
        [HttpPost]
        [Route("/accountprocess")]
        public IActionResult accountprocess(Account NewAccount)
        {
        
            ViewBag.UserName =HttpContext.Session.GetString("UserName");
            List<Account> AccountInfo1 = _context.BankAccounts.Where(account => account.User_id == (int)HttpContext.Session.GetInt32("UserId")).ToList();
            ViewBag.info = AccountInfo1;
            int Sum1 = 0;
            for(var i = 0; i < AccountInfo1.Count; i++)
            {     
                 Sum1 += AccountInfo1[i].Amount;
            }
            if (((int)Sum1 + (int)NewAccount.Amount) > 0)
            {

                NewAccount.User_id = (int)HttpContext.Session.GetInt32("UserId");
                NewAccount.Created_at = DateTime.Now;
                NewAccount.Updated_at = DateTime.Now;
                _context.BankAccounts.Add(NewAccount);  
                _context.SaveChanges();
                return RedirectToAction("Account");
            }
            else
            {
                ViewBag.sum = Sum1;
                ViewBag.InsertError = "Cannot withdraw more than your current balance!";
                return View("Account");
            }
        }
    }
}
