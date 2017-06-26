using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace Quating_Dojo.Controllers
{
    public class HomeController : Controller
    {
        // GET: /Home/
        [HttpGet]
        [Route("")]
        public IActionResult Index()
        {
           
            return View();
        }


        [HttpPost]
        [Route("/process")]

        public IActionResult Process(string quote, string name)
        {
             DbConnector.Execute($"INSERT INTO Quotes(quote, name, created_at, updated_at) VALUES ('{quote}', '{name}', now(), now())");
            return RedirectToAction("quotes");
        }

        
        [HttpGet]
        [Route("/quotes")]
        public IActionResult Quotes()
        {
            List<Dictionary<string, object>> allusers =  DbConnector.Query($"SELECT * FROM Quotes ORDER BY created_at Desc");
            ViewBag.users = allusers;
            return View("quotes");
        }
    }
}
