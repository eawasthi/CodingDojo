using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using FinalExam.Models;
using System.Linq;

namespace FinalExam.Controllers
{
    public class LoginController : Controller
    {
        private MainContext _context;
 
        public LoginController(MainContext context)
        {
            _context = context;
        }
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Login()
        {
            ViewBag.Errors = new List<string>();
            return View();
        }

        [HttpPost]
        [Route("/register")]
        public IActionResult Register(RegisterViewModel User)
        {
            if(ModelState.IsValid)
            {
                User NewPerson = new User
                {
                    Firstname = User.Firstname,
                    Lastname = User.Lastname,
                    Email = User.Email,
                    Password = User.Password,
                    CreatedAt =DateTime.Now,
                    UpdatedAt = DateTime.Now,
                };
                _context.Users.Add(NewPerson);
                _context.SaveChanges();
                HttpContext.Session.SetInt32("UserId", NewPerson.UserId);
                HttpContext.Session.SetString("UserName", NewPerson.Firstname);
                return RedirectToAction("Dashboard","Dashboard");
            }
            else
            {
                ViewBag.Errors = ModelState.Values;
                return View("Login");
            }
         }
        [HttpPost]
        [Route("loginprocess")]
        public IActionResult Loginprocess(string Email, string Password)
        {
            List<User> ReturnedUserEmail = _context.Users.Where(user => user.Email == Email).ToList();
            if(ReturnedUserEmail.Count > 0)
            {
                if(ReturnedUserEmail[0].Password == Password)
                {
                    HttpContext.Session.SetInt32("UserId", ReturnedUserEmail[0].UserId);
                    HttpContext.Session.SetString("UserName", ReturnedUserEmail[0].Firstname);
                    return RedirectToAction("Dashboard", "Dashboard");
                }
                else
                {
                    ViewBag.Errors = new List<string>();
                    ViewBag.PasswordErrors = "Password is invalid!";
                    return View("Login");
                }
            }
            else
            {
                ViewBag.Errors = new List<string>();
                ViewBag.EmailErrors = "Email is invalid or not found!";
                return View("Login");
            }
        }
    }
}
