using System.ComponentModel.DataAnnotations;

namespace BooksAPI.Models;

public class Book
{
    [Key]
    [Required]
    public int Id { get; set; }

    [Required(ErrorMessage = "The field 'title' is required")]
    [MaxLength(300)]
    public string Title { get; set; }
    
    public virtual ICollection<Author> Authors { get; set; }

    public virtual ICollection<Genre> Genres { get; set; }
}