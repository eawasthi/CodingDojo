using System.ComponentModel.DataAnnotations;
using System;
namespace Wishlist.Models
{
    public class WishList : BaseEntity
    {
        public int WishlistId {get;set;}
        public int UserId {get;set;}
        public User User { get; set; }
        public int ItemId {get;set;}
        public Item Item { get; set; }
    }
}