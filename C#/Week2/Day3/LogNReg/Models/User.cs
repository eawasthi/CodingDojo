using System.ComponentModel.DataAnnotations;
using System;
namespace LogNReg.Models
{
    
    public class User : BaseEntity
    
    {
        
        [Required] 
        [MinLength(2)]    
        public string fname { get; set; }
     
        [Required] 
        [MinLength(2)]
        public string lname { get; set; }
    

        [RequiredAttribute] 
        public int age { get; set; }



        [Required]
        [EmailAddress]
        public string email { get; set; }
        
        
        
        
        [Required] 
        [DataType(DataType.Password)]
        [MinLength(8)]

        public string password { get; set; }

    }
}

