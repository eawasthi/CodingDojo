using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace TimeDisplay.Controllers
{
    public class TimeDisplayController : Controller
    {
        [HttpGet]
        [Route("")]
        
        public IActionResult TimeDisplay()
        {
            return View("TimeDisplay");
        }
    }

}