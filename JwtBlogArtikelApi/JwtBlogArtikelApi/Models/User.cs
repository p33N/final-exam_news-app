namespace JwtBlogArtikelApi.Models
{
    public class User
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int EmailId { get; set; }
        public Email? Email { get; set; }
        public string? About { get; set; }
        public bool Subscribtion { get; set; }
        public IList<Follow>? Followers { get; set; }
        public IList<Follow>? Followings { get; set; }
        public IList<Bookmark>? Bookmarks { get; set; }
        public ICollection<Article>? Articles { get; set; }
        public ICollection<Comment>? Comments { get; set; }
        public ICollection<Reply>? Replies { get; set; }
        public ICollection<UserLike>? UserLikes { get; set; }
    }
}
