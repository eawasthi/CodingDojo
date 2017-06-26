using System;
using System.ComponentModel.DataAnnotations;
namespace Wishlist.Models
{
    public class RegisterViewModel : BaseEntity
    {
        [Required(ErrorMessage = "First Name is required!")]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "First Name should be all characters!")]
        [MinLength(3, ErrorMessage = "First Name must be atleast 3 characters!")]
        public string Name { get; set; }
 

        [Required]
        [RegularExpression(@"^[a-zA-Z]+$")]
        [MinLength(3, ErrorMessage = "Username must be atleast 3 characters!")]
        public string Username { get; set; }

        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Compare("Password", ErrorMessage = "Password and confirmation must match.")]
        public string Confirmpass { get; set; }

        [Required(ErrorMessage = "Date is required!")]
        public DateTime Date { get; set; }
    }
}