using Microsoft.AspNetCore.Mvc;
using AutoMapper;

using BooksAPI.Models;
using BooksAPI.Data;
using BooksAPI.Data.Dtos;

namespace BooksAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class BookController : ControllerBase
{

   private MyBooksContext _context;
   private IMapper _mapper;

   public BookController(MyBooksContext context, IMapper mapper)
   {
      _context = context;
      _mapper = mapper;
   }

   [HttpPost]
   public IActionResult CreateBook([FromBody] CreateBookDto bookDto)
   {
      var existingAuthors = _context.Authors.Where(author => bookDto.Authors.Any(id => id == author.Id)).ToList();
      var existingGenres = _context.Genres.Where(genre => bookDto.Genres.Any(id => id == genre.Id)).ToList();
      if (existingAuthors.Count != bookDto.Authors.Count || existingGenres.Count != bookDto.Genres.Count) return BadRequest();
      Book book = new Book {
         Title = bookDto.Title,
      };
      _context.Books.Add(book);
      _context.SaveChanges();
      return CreatedAtAction(nameof(GetBookById), new { id = book.Id }, book);
   }

   [HttpGet]
   public IActionResult GetBooks([FromQuery] int page = 1)
   {
      if(page > 0) {
         int skip = 10 * (page - 1);
         const int take = 10;
         return Ok( 
            _mapper.Map<List<ReadBookDto>>(_context.Books.Skip(skip).Take(take).ToList())
         );
      } else {
         return BadRequest();
      }
   }

   [HttpGet("{id}")]
   public IActionResult GetBookById(int id)
   {
      var book = _context.Books.FirstOrDefault(book => book.Id == id);
      if(book == null) return NotFound();
      return Ok(_mapper.Map<ReadBookDto>(book));
   }

   [HttpPut("{id}")]
   public IActionResult UpdateBook(int id, [FromBody] UpdateBookDto bookDot)
   {
      var book = _context.Books.FirstOrDefault(book => book.Id == id);
      if(book == null) return NotFound();
      _mapper.Map(bookDot, book);
      _context.SaveChanges();
      return NoContent();
   }

   [HttpDelete("{id}")]
   public IActionResult DeleteBook(int id)
   {
      var book = _context.Books.FirstOrDefault(book => book.Id == id);
      if(book == null) return NotFound();
      _context.Remove(book);
      _context.SaveChanges();
      return NoContent();
   }
}