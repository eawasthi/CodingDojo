using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace FinalExam.Models
{
    public class Activity : BaseEntity
    {
        [Key]
        public int ActivitiesId {get;set;}
        public string Title {get; set;}
        public DateTime Date {get; set;}
        public DateTime Time {get; set;}
        public string Duration {get; set;}
        public string Description {get; set;}
        public DateTime CreatedAt {get;set;}
        public DateTime UpdatedAt{get;set;}
        public int UserId { get; set; }
        public User User { get; set; }
        public List<JoinAct> JoinActivity {get; set;}

        public Activity()
         {
            JoinActivity = new List<JoinAct>();
         }
    }
}