using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DojoDachi.Controllers
{
    public static class SessionExtensions
{
    // We can call ".SetObjectAsJson" just like our other session set methods, by passing a key and a value
    public static void SetObjectAsJson(this ISession session, string key, object value)
    {
        // This helper function simply serializes theobject to JSON and stores it as a string in session
        session.SetString(key, JsonConvert.SerializeObject(value));
    }
       
    // generic type T is a stand-in indicating that we need to specify the type on retrieval
    public static T GetObjectFromJson<T>(this ISession session, string key)
    {
        string value = session.GetString(key);
        // Upone retrieval the object is deserialized based on the type we specified
        return value == null ? default(T) : JsonConvert.DeserializeObject<T>(value);
    }
}
    public class Dojo_DachiController : Controller
    {
        [HttpGet]
        [Route("")]
        
        public IActionResult index()
        {
            if(HttpContext.Session.GetObjectFromJson<virtualPet>("pet") == null)
            {
                var info = new virtualPet();
                HttpContext.Session.SetObjectAsJson("pet", info);
                ViewBag.myPet = info;
            }
            var status = HttpContext.Session.GetObjectFromJson<virtualPet>("pet");
            ViewBag.Status = status;
           
            if(status.energy > 100 && status.fullness >100 && status.happiness >100)
            {
                ViewBag.Message = "You won!";
            }
            ViewBag.Message = TempData["messages"];
            return View("Index");
        }

        [HttpPost]
        [Route("feed")]

        public IActionResult feed()
        {
            Random rand = new Random();
            int chance = rand.Next(1,101);
            var status = HttpContext.Session.GetObjectFromJson<virtualPet>("pet");
            ViewBag.Status = status;
            
            if(status.meals > 0){
                
                if(chance <=25)
                {
                status.meals -=1;
                ViewBag.Message = "DojoDachi  did not enjoyed the food";
                }
                else
                {
                    status.meals -=1;
                    status.fullness += rand.Next(5,11);
                    ViewBag.Message = "DojoDachi  did enjoyed the food";
                }
            }
            else
            {
                 TempData["messages"] = "you are out of meal!!";
            }
            ViewBag.Message = TempData["messages"];
            HttpContext.Session.SetObjectAsJson("pet", status);
            return RedirectToAction("Index");
         }
            
           
    

        [HttpPost]
        [Route("play")]
        public IActionResult play()
        {
            var status =  HttpContext.Session.GetObjectFromJson<virtualPet>("pet");
            Random rand = new Random();
            int chance = rand.Next(0, 101);
            ViewBag.Status = status;
            if(status.energy > 0 ){
                if(chance <= 25){
                    status.energy -=5;
                }
                else{
                    status.energy -=5;
                    status.happiness += rand.Next(5,11);
                }
            }         
            else{
                TempData["messages"] = "Your Dead!";
            }
            HttpContext.Session.SetObjectAsJson("pet", status);
            ViewBag.Messege = TempData["messages"];
            return RedirectToAction("Index");
        }

        [HttpPost]
        [Route("work")]

        public IActionResult work()
        {
            var status =  HttpContext.Session.GetObjectFromJson<virtualPet>("pet");
            Random rand = new Random();
            ViewBag.Status = status;
            if(status.energy > 0){
                status.energy -= 5;
                status.meals += rand.Next(1,4);
            }
            else{
                TempData["messages"] = "You are all our of energy!";
            }
            HttpContext.Session.SetObjectAsJson("pet", status);
            ViewBag.Messege = TempData["messages"];
            return RedirectToAction("Index");

        }

        [HttpPost]
        [Route("sleep")]

        public IActionResult sleep()
        {
         var status =  HttpContext.Session.GetObjectFromJson<virtualPet>("pet");
         ViewBag.Status = status;
         if(status.fullness >= 5 && status.happiness >= 5 )
         {
            status.energy += 15;
            status.fullness -=5;
            status.happiness -=5;
         }
         else {
             TempData["messages"] = "You are Dead!";
         }
         HttpContext.Session.SetObjectAsJson("pet", status);
         ViewBag.Message = TempData["messages"];
         return RedirectToAction("Index");
        }

        [HttpGet]
        [Route("clear")]

        public IActionResult clear()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }



        
        }
    }
