using System.ComponentModel.DataAnnotations;
using System;
namespace BankAccounts.Models
{
    public class Account
    {
        public int id {get;set;}
        public int Amount {get;set;}

        public DateTime Created_at {get;set;}
        public DateTime Updated_at{get;set;}

        public int User_id { get; set; }
    }
}