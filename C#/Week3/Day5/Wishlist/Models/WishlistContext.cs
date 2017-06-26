using Microsoft.EntityFrameworkCore;
 
namespace Wishlist.Models
{
    public class WishlistContext : DbContext
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public WishlistContext(DbContextOptions<WishlistContext> options) : base(options) { }

        public DbSet<User> Users {get; set;}
        public DbSet<Item> Items {get; set;}
        public DbSet<WishList> Wishlist {get; set;}

    }
}