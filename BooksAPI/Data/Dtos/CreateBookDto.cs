using System.ComponentModel.DataAnnotations;

namespace BooksAPI.Data.Dtos;

public class CreateBookDto
{
    [Required(ErrorMessage = "The field 'title' is required")]
    [StringLength(300, ErrorMessage = "The field 'title' has max length of 300 characters.")]
    public string Title { get; set; }

    [Required(ErrorMessage = "The field 'authors' must contain a list with at least one Author's ID")]
    public List<int> Authors { get; set;}

    [Required(ErrorMessage = "The field 'genres' must contain a list with at least one Genre's ID")]
    public List<int> Genres { get; set;}
}