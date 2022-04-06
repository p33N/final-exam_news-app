namespace JwtBlogArtikelApi.Models
{
    public class Bookmark
    {
        public int UserId { get; set; }
        public User? User { get; set; }
        public int ArtilceId { get; set; }
        public Article? Article { get; set; }
    }
}
