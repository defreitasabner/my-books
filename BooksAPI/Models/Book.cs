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
    
    [Required]
    public List<Author> Authors { get; set; }

    [Required]
    public List<Genre> Genres { get; set; }
}