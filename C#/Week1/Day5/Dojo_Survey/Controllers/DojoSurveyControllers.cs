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
            return View("Form");
        }
        [HttpPost]
        [Route("/method")]
        public IActionResult Method(string name, string location, string language, string comment)
        {
            ViewBag.Name = name;
            ViewBag.Location = location;
            ViewBag.Language = language;
            ViewBag.Comment = comment;

            return View("Result");
        }
    }
}