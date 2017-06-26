using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using LostInWoods.Factory;
using LostInWoods.Models;

namespace LostInWoods.Controllers
{
    public class TrailsController : Controller
    
    {
        private readonly TrailFactory _trailFactory;
        public TrailsController()
        {
            //Instantiate a UserFactory object that is immutable (READONLY)
            //This establishes the initial DB connection for us.
            _trailFactory = new TrailFactory();
        }
    
        [HttpGet]
        [Route("")]
        public IActionResult Trails()
        {  
            ViewBag.Errors = new List<string>();
            ViewBag.Trails = _trailFactory.FindAll();
            return View();
        }

        [HttpPost]
        [Route("create")]
        public IActionResult Create(Trail newTrail)
        {   
            if(ModelState.IsValid){
                _trailFactory.Add(newTrail);
                return RedirectToAction("Trails");
            }
            else{
                ViewBag.Errors = ModelState.Values;
                return View("NewTrail");
            }
        }

        [HttpGet]
        [Route("NewTrail")]
        public IActionResult NewTrail()
        {   
            ViewBag.Errors = new List<string>();
            return View("NewTrail");
        }
        [HttpGet]
        [Route("Trail/{id}")]
        public IActionResult NewTrail(int id)
        {   
            ViewBag.Errors = new List<string>();
            ViewBag.CurrTrail = _trailFactory.TrailID(id);
            return View("MyTrail");
        }
    }
}