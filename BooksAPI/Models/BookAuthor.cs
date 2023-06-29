using System.ComponentModel.DataAnnotations;

namespace BooksAPI.Models;

public class BookAuthor
{
    [Required]
    public int BookId { get; set; }
    public virtual Book Book { get; set; }

    [Required]
    public int AuthorId { get; set; }
    public virtual Author Author { get; set; }
}