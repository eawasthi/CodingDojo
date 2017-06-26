using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;

namespace FinalExam.Models
{
    public class JoinAct : BaseEntity
    {
        [Key]
        public int JoinActivityId {get;set;}
        public int ActivitiesId {get;set;}
        public Activity Activity { get; set; }
        public int UserId {get;set;}
        public User User { get; set; }

    }
}