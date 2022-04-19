namespace JwtBlogArtikelApi.Models
{
    public class Email
    {
        public int Id { get; set; }

        public string? UserEmail { get; set; }

        public int Activated { get; set; }

        public int NewsSignup { get; set; }

        public User? User { get; set; }
    }
}
