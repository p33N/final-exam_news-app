namespace JwtBlogArtikelApi.Models
{
    public class User
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int EmailId { get; set; }

        public Email Email { get; set; }

        public string About { get; set; }

        public bool Subscribtion { get; set; }

        public IList<Follows> Followers { get; set; }

        public IList<Follows> Followings { get; set; }
    }
}
