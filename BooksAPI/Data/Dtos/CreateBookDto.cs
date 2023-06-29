using System.ComponentModel.DataAnnotations;

namespace BooksAPI.Data.Dtos;

public class CreateBookDto
{
    [Required(ErrorMessage = "The field 'title' is required")]
    [StringLength(300, ErrorMessage = "The field 'title' has max length of 300 characters.")]
    public string Title { get; set; }
}