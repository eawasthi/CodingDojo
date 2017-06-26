using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
// using System.Collections.Generic;
using System;

namespace Random_Passcode.Controllers
{
    public class  Random_PasscodeController: Controller
    {
        [HttpGet]
        [Route("")]
        
        public IActionResult index()
        {   
           
            int? count =HttpContext.Session.GetInt32("count");
            if(count == null){
                count = 0;
            }
            else{
                count=count + 1;
            }
            string Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            string passcode = "";
            Random rand = new Random();
            for(int idx = 0; idx<14; idx++){
                passcode = passcode + Characters[rand.Next(0, Characters.Length)];
            }
            ViewBag.passcode = passcode;
            ViewBag.count = count;
            HttpContext.Session.SetInt32("count", (int)count);
            return View("Index");
        }
    }
}
