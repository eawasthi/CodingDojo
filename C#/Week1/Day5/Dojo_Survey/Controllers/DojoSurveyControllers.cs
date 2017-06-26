using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace Dojo_Survey.Controllers
{
    public class Dojo_SurveyController : Controller
    {
        [HttpGet]
        [Route("")]
        
        public IActionResult Dojo_Survey()
        {
            ViewBag.Errors = new List<string>();
            return View("Form");
        }
        [HttpPost]
        [Route("/method")]
        public IActionResult Method(string name, string location, string language, string comment)
        {
            ViewBag.Errors = new List<string>();
            if(name == null){
                ViewBag.Errors.Add("Name cannot be empty");
            }
             if(location == null){
                ViewBag.Errors.Add("Location cannot be empty");
            }
             if(language == null){
                ViewBag.Errors.Add("Language cannot be empty");
            }
             if(comment == null){
                ViewBag.Errors.Add("Comment cannot be empty");
            }

            if (ViewBag.Errors.Count > 0){
                return View("Form");
            }

            ViewBag.Name = name;
            ViewBag.Location = location;
            ViewBag.Language = language;
            ViewBag.Comment = comment;

            return View("Result");
        }
    }
}
