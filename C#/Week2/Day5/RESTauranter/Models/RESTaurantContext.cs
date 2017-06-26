using Microsoft.EntityFrameworkCore;

namespace RESTauranter.Models
{
    public class RESTauranterContext : DbContext
    {
        public RESTauranterContext(DbContextOptions<RESTauranterContext> options): base(options) {}
        
        public DbSet<Review> restaurant {get; set;}
    }
}