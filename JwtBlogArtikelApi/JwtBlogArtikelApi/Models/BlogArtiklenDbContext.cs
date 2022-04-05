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
        public DbSet<Follow> Follows => Set<Follow>();
        public DbSet<Article> Articles => Set<Article>();
        public DbSet<Bookmark> Bookmarks => Set<Bookmark>();
        public DbSet<Tag> Tags => Set<Tag>();
        public DbSet<ArticleTag> ArticleTags => Set<ArticleTag>();


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Follow>().HasKey(sc => new { sc.FollowerId, sc.FolloweringId});

            modelBuilder.Entity<Follow>()
                .HasOne<User>(sc => sc.Following)
                .WithMany(s => s.Followings)
                .HasForeignKey(sc => sc.FolloweringId);


            modelBuilder.Entity<Follow>()
                .HasOne<User>(sc => sc.Follower)
                .WithMany(s => s.Followers)
                .HasForeignKey(sc => sc.FollowerId);

            modelBuilder.Entity<Article>()
                .HasOne<User>(s => s.Author)
                .WithMany(u => u.Articles)
                .HasForeignKey(s => s.UserId);

            modelBuilder.Entity<Bookmark>().HasKey(sc => new { sc.UserId, sc.ArtilceId });

            modelBuilder.Entity<Bookmark>()
                .HasOne<User>(sc => sc.User)
                .WithMany(s => s.Bookmarks)
                .HasForeignKey(sc => sc.UserId);


            modelBuilder.Entity<Bookmark>()
                .HasOne<Article>(sc => sc.Article)
                .WithMany(s => s.Bookmarks)
                .HasForeignKey(sc => sc.ArtilceId);

            modelBuilder.Entity<ArticleTag>().HasKey(sc => new { sc.TagId, sc.ArtilceId });

            /*modelBuilder.Entity<ArticleTag>()
                .HasOne<Article>(sc => sc.Article)
                .WithMany(s => s.Tags)
                .HasForeignKey(sc => sc.ArticleId);


            modelBuilder.Entity<ArticleTag>()
                .HasOne<Tag>(sc => sc.Tag)
                .WithMany(s => s.Articles)
                .HasForeignKey(sc => sc.TagId);
*/
        }

    }
}
