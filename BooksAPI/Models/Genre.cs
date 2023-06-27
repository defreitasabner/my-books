using System.ComponentModel.DataAnnotations;

namespace BooksAPI.Models;

public class Genre
{
    [Key]
    [Required]
    public int Id { get; set; }
    
    [Required]
    public string Name { get; set; }
}