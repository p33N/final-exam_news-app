namespace JwtBlogArtikelApi.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string? Body { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }
        public int ArticleId { get; set; }
        public Article? Article { get; set; }
        public ICollection<Reply>? Replies { get; set; }
        public int LikeId { get; set; }
        public Like? Like { get; set; }

    }
}
