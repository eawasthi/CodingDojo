using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace Wishlist.Models
{
    public class Item : BaseEntity
    {
        
        public int ItemId {get;set;}
        public string Product {get; set;}
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt{get;set;}
        public int UserId { get; set; }
        public User User { get; set; }
        public List<WishList> Wishlist {get;set;}
        public Item() {
            Wishlist = new List<WishList>();
        }
    }
}