namespace JwtBlogArtikelApi.Models
{
    public class Reply
    {
        public int Id { get; set; }
        public string ReplyComment { get; set; }
        public int CommentId { get; set; }
        public Comment Comment { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }

    }
}
