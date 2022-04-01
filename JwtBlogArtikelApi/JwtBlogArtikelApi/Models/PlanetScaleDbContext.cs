using Microsoft.EntityFrameworkCore;

namespace JwtBlogArtikelApi.Models
{
    public class PlanetScaleDbContext : DbContext
    {
        public PlanetScaleDbContext(DbContextOptions<PlanetScaleDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users => Set<User>();

    }
}
