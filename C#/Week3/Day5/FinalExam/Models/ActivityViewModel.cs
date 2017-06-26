using System;
using System.ComponentModel.DataAnnotations;
namespace FinalExam.Models
{
    public class ActivityViewModel : BaseEntity
    {
        [Required(ErrorMessage = "Title is required!")]
        // [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Title should be all characters!")]
        [MinLength(2, ErrorMessage = "Title must be atleast 2 characters!")]
        public string Title { get; set; }
 

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public DateTime Time { get; set; }

        [Required]
        public string Duration { get; set; }
 
        [Required(ErrorMessage = "Description is required!")]
        [MinLength(10, ErrorMessage = "Description must be atleast 10 characters!")]
        public string Description { get; set; }
    }
}