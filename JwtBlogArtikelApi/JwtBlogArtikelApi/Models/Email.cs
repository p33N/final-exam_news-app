namespace JwtBlogArtikelApi.Models
{
    public class Email
    {
        public Email(string? email)
        {
            Mail = email;
        }

        public int Id { get; set; }

        public string UserEmail { get; set; } = String.Empty;

        public int? Activated { get; set; } = 0;

        public int? NewsSignup { get; set; } = 0;

        public User? User { get; set; }
        public string? Mail { get; }
    }
}
