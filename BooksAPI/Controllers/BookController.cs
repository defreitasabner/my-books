using Microsoft.AspNetCore.Mvc;

using BookAPI.Models;
using BookAPI.Data;

namespace BookAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class BookController : ControllerBase
{

   private BookContext _context;

    public BookController(BookContext context)
    {
        _context = context;
    }

    [HttpPost]
     public IActionResult AddBook([FromBody] Book book)
     {
        _context.Books.Add(book);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetBookById), new { id = book.Id }, book);
        // Dessa forma padroniza com REST, informando no Header onde o recurso criado pode ser encontrado
     }

     [HttpGet]
     public IEnumerable<Book> ListAllBooks([FromQuery] int skip = 0, [FromQuery]int take = 0)
     {
        return _context.Books.Skip(skip).Take(take);
     }

     [HttpGet("{id}")]
     public IActionResult GetBookById(int id)
     {
        var book = _context.Books.FirstOrDefault(book => book.Id == id);
        if(book == null) return NotFound();
        return Ok(book);
     }
}