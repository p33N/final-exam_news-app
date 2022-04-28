namespace JwtBlogArtikelApi.Models
{
    public class Email
    {
        public Email(string? email)
        {
            Email = email;
        }

        public int Id { get; set; }

        public string UserEmail { get; set; } = String.Empty;

        public int? Activated { get; set; } = 0;

        public int? NewsSignup { get; set; } = 0;

        public User? User { get; set; }
        public string? Email { get; }
    }
}
