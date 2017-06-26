using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Wishlist.Models;
using System.Linq;

namespace Wishlist.Controllers
{
    public class LoginController : Controller
    {
        private WishlistContext _context;
 
        public LoginController(WishlistContext context)
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
        [Route("/register")]
        public IActionResult Register(RegisterViewModel User)
        {
            if(ModelState.IsValid)
            {
                User NewPerson = new User
                {
                    Name = User.Name,
                    Username = User.Name,
                    Password = User.Password,
                    Date = User.Date,
                    CreatedAt =DateTime.Now,
                    UpdatedAt = DateTime.Now,
                };
                HttpContext.Session.SetString("UserName", User.Name);
                _context.Users.Add(NewPerson);
                _context.SaveChanges();
                HttpContext.Session.SetInt32("UserId", NewPerson.UserId);
                return RedirectToAction("AllItems","AllItems");
            }
            else
            {
                ViewBag.Errors = ModelState.Values;
                return View("Index");
            }
        }

        [HttpPost]
        [Route("loginprocess")]
        public IActionResult Loginprocess(string Username, string Password)
        {
            List<User> ReturnedUserEmail = _context.Users.Where(user => user.Username == Username).ToList();
            if(ReturnedUserEmail.Count > 0)
            {
                if(ReturnedUserEmail[0].Password == Password)
                {
                    HttpContext.Session.SetString("UserName", ReturnedUserEmail[0].Name);
                    HttpContext.Session.SetInt32("UserId", ReturnedUserEmail[0].UserId);
                    return RedirectToAction("AllItems", "AllItems");
                }
                else
                {
                    ViewBag.Errors = new List<string>();
                    ViewBag.PasswordErrors = "Password is invalid!";
                    return View("Index");
                }
            }
            else
            {
                ViewBag.Errors = new List<string>();
                ViewBag.Username = "Username is invalid or not found!";
                return View("Index");
            }
        }
    }


}
