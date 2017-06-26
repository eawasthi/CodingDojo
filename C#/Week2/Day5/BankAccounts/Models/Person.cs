using System.ComponentModel.DataAnnotations;
using System;
namespace BankAccounts.Models
{
    public class Person
    {
        public int id {get;set;}
        public string FirstName {get; set;}
        public string LastName {get; set;}
        public string Email {get; set;}
        public string Password {get; set;}
        public DateTime Created_at {get;set;}
        public DateTime Updated_at{get;set;}
    }
}