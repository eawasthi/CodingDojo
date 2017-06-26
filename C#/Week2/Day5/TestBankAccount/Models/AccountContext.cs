using Microsoft.EntityFrameworkCore;
 
namespace TestBankAccount.Models
{
    public class AccountContext : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public AccountContext(DbContextOptions<AccountContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }

        public DbSet<AccountInfo> Amounts { get; set; }
    }
}