using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Wishlist.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Wishlist.Controllers
{
    public class AllItemsController : Controller
    {
        private WishlistContext _context;
 
        public AllItemsController(WishlistContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("/allitems")]
        public IActionResult AllItems()
        {
            ViewBag.Username =HttpContext.Session.GetString("UserName");
            int UserId =(int)HttpContext.Session.GetInt32("UserId");
            ViewBag.UserId = UserId;
            List<Item> AllItems = _context.Items.Where(x => x.UserId == UserId)
                .Include(x => x.User)
                .ToList();

            // List<Item> OtherItems = _context.Items.Where(x => x.UserId != UserId)
            //     .Include(x => x.User)
            //     .Include(x => x.Wishlist)
            //     .ToList();
            List<WishList> allWishListItems = _context.Wishlist.Where(x => x.UserId ==UserId).Include(x => x.Item).ThenInclude(x => x.User).ToList();
            List<Item> allitems = _context.Items.ToList();
            ViewBag.allitems = allitems;
            
            List<WishList> CurrentUser = _context.Wishlist.Where(x => x.UserId == UserId).ToList();
            ViewBag.CurrentUser = CurrentUser;

            for(int i =0; i<CurrentUser.Count;i++)
            {
            List<Item> OtherUser = _context.Items
                .Where(x => x.ItemId != CurrentUser[i].ItemId)
                .Include(x => x.User)
               .Where(x => x.UserId != UserId)
                .ToList();
                ViewBag.OtherUser = OtherUser;
             }

            
        
        

            
            ViewBag.allWishListItems = allWishListItems;
            ViewBag.AllItems = AllItems;
           
           


            return View("Items");
        }
        [HttpGet]
        [Route("/additem")]
        public IActionResult AddItem()
        {
            ViewBag.Errors = new List<string>();
            return View("Additem");
        }
        [HttpPost]
        [Route("/submititem")]
        public IActionResult SubmitItem(ItemViewModel item)
        {
            if(ModelState.IsValid)
            {
                Item NewItem = new Item
                {
                    Product = item.Product,
                    CreatedAt =DateTime.Now,
                    UpdatedAt = DateTime.Now,
                    UserId = (int)HttpContext.Session.GetInt32("UserId")
                };
                _context.Items.Add(NewItem);
                    _context.SaveChanges();
                    return RedirectToAction("AllItems");

            }
            else
            {
                ViewBag.ItemErrors = ModelState.Values;
                return View("Additem");
            }
            
        }
        [HttpGet]
        [Route("/addWish/{id}")]
        public IActionResult Addwish(int id)
        {
           HttpContext.Session.SetInt32("ItemId", id);
           int UserId = (int)HttpContext.Session.GetInt32("UserId");
           WishList AddWish = new WishList
           {
               ItemId = id,
               UserId = UserId
           };
           _context.Wishlist.Add(AddWish);
           _context.SaveChanges();
           return RedirectToAction("allItems");
        }
        [HttpGet]
        [Route("/delete/{id}")]
        public IActionResult Delete(int id)
        {
            int UserId = (int)HttpContext.Session.GetInt32("UserId");
            Item DeleteWish = _context.Items.Where(x => x.ItemId == id).Where(x => x.UserId == UserId).SingleOrDefault();
            _context.Remove(DeleteWish);
            _context.SaveChanges();
            return RedirectToAction("AllItems");
        }
    }
}





