using Microsoft.AspNetCore.Mvc;

using BookAPI.Models;

namespace BookAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class BookController : ControllerBase
{
    private static List<Book> books = new List<Book>();
    private static int id = 0;

    [HttpPost]
     public IActionResult AddBook([FromBody] Book book)
     {
        book.Id = id++;
        books.Add(book);
        return CreatedAtAction(nameof(GetBookById), new { id = book.Id }, book);
        // Dessa forma padroniza com REST, informando no Header onde o recurso criado pode ser encontrado
     }

     [HttpGet]
     public IEnumerable<Book> ListAllBooks([FromQuery] int skip = 0, [FromQuery]int take = 0)
     {
        return books.Skip(skip).Take(take);
     }

     [HttpGet("{id}")]
     public IActionResult GetBookById(int id)
     {
        var book = books.FirstOrDefault(book => book.Id == id);
        if(book == null) return NotFound();
        return Ok(book);
     }
}