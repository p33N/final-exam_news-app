namespace JwtBlogArtikelApi.Models
{
    public class UserLike
    {
        public int Id { get; set; }
        public string Desciminator { get; set; }
        public int OwnerId { get; set; }
        public int LikeId { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
