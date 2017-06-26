using System.ComponentModel.DataAnnotations;
using System;
namespace Form_Submission.Models
{
    
    public class User : BaseEntity
    
    {
        
        [Required] 
        [MinLength(4)]    
        public string FirstName { get; set; }
     
        [Required] 
        [MinLength(4)]
        public string LastName { get; set; }
    

        [RequiredAttribute] 
        public int Age { get; set; }



        [Required]
        [EmailAddress]
        public string Email { get; set; }
        
        
        
        
        [Required] 
        [DataType(DataType.Password)]
        public string Password { get; set; }

    }
}

