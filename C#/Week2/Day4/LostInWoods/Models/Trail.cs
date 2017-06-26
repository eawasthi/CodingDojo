using System.ComponentModel.DataAnnotations;
using System;
namespace LostInWoods.Models
{
    
    public class Trail : BaseEntity
    
    {
        
        public int id {get; set;}

        [Required]    
        public string trail_name { get; set; }
     
        [Required] 
        [Range(0, double.MaxValue, ErrorMessage = "Please enter a valid number")]
        public int trail_length { get; set; }
    

        [Required]
        [MinLength(10)]
        public string description { get; set; }
        
        
        [Required]
        [Range(0, Single.MaxValue, ErrorMessage = "Please enter a valid number")]
        public int elavation_change {get; set;}
        
        [Required]
        public string latitude {get; set;}

        [Required]
        public string longitude {get; set;}

    }
}

