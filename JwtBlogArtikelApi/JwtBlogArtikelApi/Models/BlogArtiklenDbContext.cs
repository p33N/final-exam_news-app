using Microsoft.EntityFrameworkCore;

namespace JwtBlogArtikelApi.Models
{
    public class BlogArtiklenDbContext : DbContext
    {
        public BlogArtiklenDbContext(DbContextOptions<BlogArtiklenDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users => Set<User>();
        public DbSet<Email> Emails => Set<Email>();
        public DbSet<Follows> Follows => Set<Follows>();


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Follows>().HasKey(sc => new { sc.FollowerId, sc.FolloweringId});

            modelBuilder.Entity<Follows>()
                .HasOne<User>(sc => sc.Following)
                .WithMany(s => s.Followings)
                .HasForeignKey(sc => sc.FolloweringId);


            modelBuilder.Entity<Follows>()
                .HasOne<User>(sc => sc.Follower)
                .WithMany(s => s.Followers)
                .HasForeignKey(sc => sc.FollowerId);
        }

    }
}
