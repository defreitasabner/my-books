using System.ComponentModel.DataAnnotations;

namespace BookAPI.Models;

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

    [Required(ErrorMessage = "The field 'gender' is required")]
    [MaxLength(100)]
    public string Gender { get; set; }
    
    [Required(ErrorMessage = "The field 'pageNumber' is required")]
    [Range(0, Double.MaxValue, ErrorMessage = "The page number must be greater than 0")]
    public int PageNumber { get; set; }
}