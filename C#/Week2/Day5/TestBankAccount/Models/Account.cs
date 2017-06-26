using System.ComponentModel.DataAnnotations;
using System;
namespace TestBankAccount.Models
{
    public class AccountInfo
    {
        public int id {get;set;}
        public int Amount {get;set;}

        public DateTime Created_at {get;set;}
        public DateTime Updated_at{get;set;}

        public int User_id { get; set; }
    }
}