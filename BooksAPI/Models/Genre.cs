using System.ComponentModel.DataAnnotations;

namespace BooksAPI.Models;

public class Genre
{
    [Key]
    [Required]
    public int Id { get; set; }
    
    [Required]
    [MaxLength(150)]
    public string Name { get; set; }

    public virtual ICollection<Book> Books { get; set; }
}