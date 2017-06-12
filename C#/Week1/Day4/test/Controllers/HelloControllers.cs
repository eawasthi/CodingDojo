using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
namespace test.Controllers
{
    public class HelloController : Controller
    {
        // This is for local host main page.
        // [HttpGetAttribute]

        // This is for localhost:5000/index
        [HttpGet]
        [Route("")]
        public IActionResult index()
        {
            return View("index");
        }

        // // This is if you need to pass an parameter.
        // [HttpGet]
        // [Route("index/{Name}")]
        // public IActionResult Method(string Name)
        // {
        // // Method body
        // }
        //  public JsonResult MainPage()
        // {
    // The Json method convert the object passed to it into JSON
        //     return Json("Please pass in the parameter!");
            
        // }



// This is how you would create a anonymous objects with coonfirming to any Class.

// [HttpGet]
// [Route("/displayint")]
//    [HttpGet]
//    [Route("{FirstName}/{LastName}/{Age}/{FavoriteColor}")]
// public IActionResult Method(string FirstName, string LastName,int Age, string FavoriteColor)
// {
//     var AnonObject = new {
//                          firstName = FirstName,
//                          lastName = LastName,
//                          age = Age,
//                          favoriteColor = FavoriteColor
//                      };
//     return Json(AnonObject);
// }
    }
}
