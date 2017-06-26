using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using TestBankAccount.Models;
using System.Linq;

namespace TestBankAccount.Controllers
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
        public IActionResult Process(RegisterViewModel User)
        {
            if(ModelState.IsValid)
            {
                User NewUser = new User
                {
                    FirstName = User.FirstName,
                    LastName = User.LastName,
                    Email = User.Email,
                    Password = User.Password,
                    Created_at = DateTime.Now,
                    Updated_at = DateTime.Now
                };
                HttpContext.Session.SetString("UserName", User.FirstName);
                _context.Users.Add(NewUser);
                _context.SaveChanges();
                List<User> ReturnedUser = _context.Users.Where(user => user.Email == User.Email).ToList();
                HttpContext.Session.SetInt32("UserId", ReturnedUser[0].Id);

                return RedirectToAction("Amount");
            }
            else
            {
                    ViewBag.Errors = ModelState.Values;
                    return View("Index");
            }

        }

        [HttpGet]
        [Route("/amount")]
        public IActionResult Amount()
        {
            List<AccountInfo> AmountInfo1 = _context.Amounts.Where(Account => Account.User_id == (int)HttpContext.Session.GetInt32("UserId")).ToList();
            ViewBag.AmountInfo1 = AmountInfo1;
            ViewBag.Errors = new List<string>();
            string UserName = HttpContext.Session.GetString("UserName");
            ViewBag.UserName = UserName;
            return View("Amount");
        }



        [HttpGet]
        [Route("/login")]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [Route("/loginProcess")]
        public IActionResult LoginProcess(string Email, string Password)
        {
           List<User> ReturnedUserEmail = _context.Users.Where(User => User.Email == Email).ToList();
            if(ReturnedUserEmail.Count > 0)
            {
                if(ReturnedUserEmail[0].Password == Password)
                {
                    HttpContext.Session.SetString("UserName", ReturnedUserEmail[0].FirstName);
                    HttpContext.Session.SetInt32("UserId", ReturnedUserEmail[0].Id);
                    return RedirectToAction("Amount");
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
        [Route("/AccountProcess")]
        public IActionResult AccountProcess(AccountInfo NewAccount)
        {
            NewAccount.User_id = (int)HttpContext.Session.GetInt32("UserId");
            NewAccount.Created_at = DateTime.Now;
            NewAccount.Updated_at = DateTime.Now;
            _context.Amounts.Add(NewAccount);  
            _context.SaveChanges();
            return RedirectToAction("Amount");
        }
    }
}

