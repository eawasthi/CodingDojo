using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using LogNReg.Models;

namespace LogNReg.Controllers
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
        [Route("/register")]

        public IActionResult register(User NewUser)
       {
            if (ModelState.IsValid){
                 _dbConnector.Execute($"INSERT INTO User(fname, lname, age, email, password, created_at) VALUES ('{NewUser.fname}', '{NewUser.lname}', '{NewUser.age}', '{NewUser.email}', '{NewUser.password}', now());");
                 return RedirectToAction("success");
             }
            else{
 		        System.Console.WriteLine("This is ModelState.Values");
                 System.Console.WriteLine(ModelState.Values);
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



        [HttpPost]
        [Route("login")]
        public IActionResult login(string email, string password)
        {
             List<Dictionary<string,object>> QueryEmail = _dbConnector.Query($"SELECT * FROM User where email = '{email}'");
            if(QueryEmail != null)
            {
                System.Console.WriteLine("In Query Email != Null. We found a User based on email");
                if((string)QueryEmail[0]["password"] == password)
                {
                 return View("success");   
                }
                else{
                    ViewBag.passworderror = "User password does not match email";
                     ViewBag.errors = new List<string>();
                    return View("index");
                }
            } 
            else{
 		        ViewBag.emailerror = "User email is invalid";
                ViewBag.errors = new List<string>();
                return View("Index");
            }
           
        }
    }
}
