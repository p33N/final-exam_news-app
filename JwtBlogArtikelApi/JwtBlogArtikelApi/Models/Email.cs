using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace JwtBlogArtikelApi.Models
{
    [Index(nameof(Mail), IsUnique = true)]
    public class Email
    {
        public int Id { get; set; }
        public bool? Activated { get; set; } = false;
        public bool? NewsSignup { get; set; } = false;
        [JsonIgnore]
        public User? User { get; set; } = null;
        public string Mail { get; set; }
    }
}
