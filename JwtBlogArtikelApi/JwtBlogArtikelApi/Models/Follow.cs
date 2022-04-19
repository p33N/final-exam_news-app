namespace JwtBlogArtikelApi.Models
{
    public class Follow
    {
        public int FollowerId { get; set; }
        public User? Follower { get; set; }
        public int FolloweringId { get; set; }
        public User? Following { get; set; }
    }
}
