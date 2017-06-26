using System;
using System.ComponentModel.DataAnnotations;
namespace Wishlist.Models
{
    public class ItemViewModel : BaseEntity
    {
        [Required(ErrorMessage = "Item is required!")]
        [MinLength(3, ErrorMessage = "Item must be atleast 3 characters!")]
        public string Product { get; set; }
    }
}