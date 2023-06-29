using System.ComponentModel.DataAnnotations;

namespace BooksAPI.Models;

public class GenreBook
{
    [Required]
    public int BookId { get; set; }
    public virtual Book Book { get; }

    [Required]
    public int GenreId { get; set; }
    public virtual Genre Genre { get; }
}