using System.ComponentModel.DataAnnotations;
namespace FinalExam.Models
{
    public class RegisterViewModel : BaseEntity
    {
        [Required(ErrorMessage = "First Name is required!")]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "First Name should be all characters!")]
        [MinLength(4, ErrorMessage = "First Name must be atleast 4 characters!")]
        public string Firstname { get; set; }
 

        [Required]
        [RegularExpression(@"^[a-zA-Z]+$",ErrorMessage = "Last Name should be all characters!")]
        public string Lastname { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
 
        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        [RegularExpression(@"^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",ErrorMessage = "Password must contains 1 number, 1 letter, and a special character!")]
        public string Password { get; set; }
 
        [Compare("Password", ErrorMessage = "Password and confirmation must match.")]
        [RegularExpression(@"^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",ErrorMessage = "Password must contains 1 number, 1 letter, and a special character!")]
        public string ConfirmPass { get; set; }
    }
}