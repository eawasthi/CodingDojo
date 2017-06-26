using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Form_Submission.Models;

namespace Form_Submission.Controllers
{
    public class HomeController : Controller
    {
        private readonly DbConnector _dbConnector;
 
        public HomeController(DbConnector connect)
        {
            _dbConnector = connect;
        }
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
            ViewBag.errors = new List<string>();
            return View();
        }

        [HttpPost]
        [Route("/process")]

        public IActionResult process(string fname, string lname, int age, string email, string password )
        {
            User NewUser = new User
        {
            FirstName = fname,
            LastName = lname,
            Age = age,
            Email = email,
            Password = password
        };
               TryValidateModel(NewUser);
            if (ModelState.IsValid){
                 _dbConnector.Execute($"INSERT INTO User(fname, lname, age, email, password, created_at) VALUES ('{fname}', '{lname}', '{age}', '{email}', '{password}', now());");
                 return RedirectToAction("success");
             }
            else{
 		        ViewBag.errors = ModelState.Values;
                return View("Index");
            }
            
        }

        [HttpGet]
        [Route("success")]

        public IActionResult success()
        {
            return View("success");
        }
    }
}
