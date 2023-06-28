using System.ComponentModel.DataAnnotations;

namespace BooksAPI.Models;

public class Book
{
    [Key]
    [Required]
    public int Id { get; set; }

    [Required(ErrorMessage = "The field 'title' is required")]
    [MaxLength(200)]
    public string Title { get; set; }
    
    public List<Author> Authors { get; set; }

    public List<Genre> Genres { get; set; }
}