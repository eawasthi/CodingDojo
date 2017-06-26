using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace FinalExam.Models
{
    public class User : BaseEntity
    {
        public int UserId {get;set;}
        public string Firstname {get; set;}
        public string Lastname {get; set;}
        public string Email {get; set;}
        public string Password {get; set;}
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt{get;set;}

        public List<Activity> Activities {get; set;}
        public List<JoinAct> JoinActivity {get; set;}

        public User()
        {
            Activities = new List<Activity>();
            JoinActivity = new List<JoinAct>();
        }
    }
}