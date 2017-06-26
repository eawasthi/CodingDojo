using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace Wishlist.Models
{
    public class User : BaseEntity
    {
        public int UserId {get;set;}
        public string Name {get; set;}
        public string Username {get; set;}
        public string Password {get; set;}
        public DateTime Date{get;set;}
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt{get;set;}
        public List<Item> Items {get; set;}
        public List<WishList> Wishlist {get; set;}
         public User() {

            Wishlist = new List<WishList>();
        }
    }
}