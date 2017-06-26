using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.Linq;
using RESTauranter.Models;

namespace RESTauranter.Controllers
{
    public class HomeController : Controller
    {
        private RESTauranterContext _context;
        public HomeController(RESTauranterContext reviews)
        {
            _context = reviews;
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
        public IActionResult Process(Review NewReview)
        {
            if(ModelState.IsValid)
            {
            //  NewReview.created_at = DateTime.Now();
            _context.Add(NewReview);
            _context.SaveChanges();
            return RedirectToAction("Reviews");
            }
            else
            {
                ViewBag.Errors = ModelState.Values;
                return View("Index");
            }
        }
        [HttpGet]
        [Route("/reviews")]
        public IActionResult Reviews()
        {
            ViewBag.allreviews = _context.restaurant.OrderByDescending(date => date.date_visit);
            return View("Reviews");
        }
    }
}
