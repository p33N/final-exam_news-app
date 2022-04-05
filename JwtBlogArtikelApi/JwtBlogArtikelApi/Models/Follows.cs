namespace JwtBlogArtikelApi.Models
{
    public class Follows
    {
        public int FollowerId { get; set; }
        public User Follower { get; set; }
        public int FolloweringId { get; set; }
        public User Following { get; set; }
    }
}
