namespace JwtBlogArtikelApi.Models
{
    public class Article
    {
        public int Id { get; set; }
        public string Headline { get; set; }
        public byte[] Image { get; set; }
        public string Content { get; set; }
        public int Likes { get; set; }
        public int UserId { get; set; }
        public User Author { get; set; }
        public IList<Bookmark> Bookmarks { get; set; }
        public IList<Tag> Tags { get; set; }

    }
}
