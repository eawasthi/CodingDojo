using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace Portfolio.Controllers
{
    public class PortfolioController : Controller
    {
        [HttpGet]
        [Route("/home")]
        
        public IActionResult Portfolio()
        {
            return View("Portfolio");
        }

        [HttpGet]
        [Route("/projects")]
        
        public IActionResult Project()
        {
            return View("Projects");
        }

        [HttpGet]
        [Route("/contact")]
        
        public IActionResult Contact()
        {
            return View("Contact");
        }
    }

}