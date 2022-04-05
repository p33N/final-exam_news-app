namespace JwtBlogArtikelApi.Models
{
    public class ArticleTag
    {
        public int TagId { get; set; }
        public Tag Tag { get; set; }
        public int ArtilceId { get; set; }
        public Article Article { get; set; }
    }
}
