using Microsoft.EntityFrameworkCore;
 
namespace FinalExam.Models
{
    public class MainContext : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public MainContext(DbContextOptions<MainContext> options) : base(options) { }

        public DbSet<User> Users {get; set;}
        public DbSet<Activity> Activities {get; set;}
        public DbSet<JoinAct> JoinActivity {get; set;}
    }
}