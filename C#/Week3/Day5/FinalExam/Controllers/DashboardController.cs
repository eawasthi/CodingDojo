using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using FinalExam.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace FinalExam.Controllers
{
    public class DashboardController : Controller
    {
        private MainContext _context;
 
        public DashboardController(MainContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("Dashboard")]
        public IActionResult Dashboard()
        {
            ViewBag.Allactivities = _context.Activities
                                    .Include(x => x.User)
                                    .Include(x => x.JoinActivity)
                                    .ThenInclude(y => y.User);
            ViewBag.UserName =HttpContext.Session.GetString("UserName");
            ViewBag.UserId= HttpContext.Session.GetInt32("UserId");
            return View("Dashboard");
        }

        [HttpGet]
        [Route("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Login", "Login");
        }
        [HttpGet]
        [Route("AddNewActivity")]
        public IActionResult AddNewActivity()
        {
            ViewBag.Errors = new List<string>();
            return View("NewActivity");
        }
        [HttpPost]
        [Route("createactivity")]
        public IActionResult Createactivity(ActivityViewModel newActivity)
        {
        DateTime DatetoCheckAgainst = DateTime.Now;
        if(newActivity.Date < DatetoCheckAgainst)
            {
               this.ModelState.AddModelError("Date", "Date has to be in Future!.");
            }

        if(newActivity.Date == DatetoCheckAgainst)
            {
               if(newActivity.Time < DatetoCheckAgainst)
                {
                this.ModelState.AddModelError("Time", "Time has to be in Future!.");
                }
            }
        
        if(ModelState.IsValid)
        {
            Activity NewActivity = new Activity
            {
                Title = newActivity.Title,
                Date = newActivity.Date,
                Time = newActivity.Time,
                Duration = newActivity.Duration,
                Description =newActivity.Description,
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now,
                UserId = (int)HttpContext.Session.GetInt32("UserId")
            };
             ViewBag.Errors = new List<string>();
            _context.Activities.Add(NewActivity);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }
        else
        {
             ViewBag.Errors = ModelState.Values;
             return View("NewActivity");
        }

        }
  

        [HttpGet]
        [Route("/oneactivity/{id}")]
        public IActionResult Oneactivity(int id)
        {
            //  ViewBag.ThisActivity = _context.Activities
            //                         .Include(x => x.User)
            //                         .Include(x => x.JoinActivity)
            //                         .ThenInclude(y => y.User)
            //                         .SingleOrDefault();
            ViewBag.UserName =HttpContext.Session.GetString("UserName");
            ViewBag.UserId= HttpContext.Session.GetInt32("UserId");
            Activity OneActivity = _context.Activities.Where(activity => activity.ActivitiesId == id)
                                    .Include(x => x.User)
                                    .Include(x => x.JoinActivity)
                                    .ThenInclude(x => x.User)
                                    .SingleOrDefault();
            ViewBag.OneActivity = OneActivity;
            
            return View("OneActivity");
        }

        [HttpGet]
        [Route("/JOIN/{id}")]
        public IActionResult JOIN(int id)
        {
            JoinAct JoinAct = new JoinAct
            {
             UserId = (int)HttpContext.Session.GetInt32("UserId"),
             ActivitiesId = id
            };
            _context.JoinActivity.Add(JoinAct);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        [HttpGet]
        [Route("/LEAVE/{id}")]
        public IActionResult LEAVE(int id)
        {
            int UserId = (int)HttpContext.Session.GetInt32("UserId");
            JoinAct RemovedGuest =  _context.JoinActivity.Where(x => x.UserId == UserId).Where(x => x.ActivitiesId == id).SingleOrDefault();
            _context.JoinActivity.Remove(RemovedGuest);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        [HttpGet]
        [Route("/delete/{id}")]
        public IActionResult Delete(int id)
        {
            Activity RetrievedActivity = _context.Activities.SingleOrDefault(activity => activity.ActivitiesId == id);
            List<JoinAct> Removeguests = _context.JoinActivity.Where(guests => guests.ActivitiesId == id).ToList();
            foreach(var guest in Removeguests){
                _context.JoinActivity.Remove(guest);
            }
            _context.Activities.Remove(RetrievedActivity);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }
    }
}