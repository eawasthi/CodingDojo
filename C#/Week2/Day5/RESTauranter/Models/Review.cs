using System.ComponentModel.DataAnnotations;
using System;
namespace RESTauranter.Models
{
    public class Review
    {
        [Required]
        public int id {get; set;}
        [Required]
        public string reviewer_name {get; set;}
        [Required]
        public string restaurant_name {get; set;}
        [Required]
        [MinLength(11)]
        public string restaurant_Review {get; set;}
        [Required]
        public DateTime date_visit {get; set;}
        [Required]
        public int stars {get; set;}
        // public DateTime created_at {get; set;}
    }
}