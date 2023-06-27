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
    
    [Required(ErrorMessage = "The field 'author' is required")]
    [MaxLength(100)]
    public string Author { get; set; }
    public virtual ICollection<Authorship> Authors { get; set; }

    [Required(ErrorMessage = "The field 'gender' is required")]
    [MaxLength(100)]
    public string Gender { get; set; }
}