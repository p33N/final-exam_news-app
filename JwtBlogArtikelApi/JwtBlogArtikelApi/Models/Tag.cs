namespace JwtBlogArtikelApi.Models
{
    public class Tag
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<Article> Articles { get; set; }

    }
}
