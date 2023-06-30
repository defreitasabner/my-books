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

    [Required]
    public virtual List<Author> Authors { get; } = new();

    [Required]
    public virtual List<Genre> Genres { get; } = new();
}