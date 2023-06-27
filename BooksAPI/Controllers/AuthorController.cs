using Microsoft.AspNetCore.Mvc;
using AutoMapper;

using BooksAPI.Models;
using BooksAPI.Data.Dtos;
using BooksAPI.Data;

namespace BooksAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthorController : ControllerBase
{
    private MyBooksContext _context;
    private IMapper _mapper;

    public AuthorController(MyBooksContext context, IMapper mapper)
    {
        MyBooksContext _context = context;
        IMapper _mapper = mapper;
    }

    [HttpPost]
    public IActionResult CreateAuthor([FromBody] CreateAuthorDto authorDto)
    {
        Author author = _mapper.Map<Author>(authorDto);
        _context.Add(author);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetAuthorById), new { id = author.Id }, author);
    }

    [HttpGet]
    public IActionResult GetAuthors([FromQuery] int page = 1, [FromQuery] int quantity = 10)
    {
        if(page > 0 && quantity > 0)
        {
            int skip = quantity * (page - 1);
            int take = quantity;
            return Ok(
                _mapper.Map<List<ReadAuthorDto>>(_context.Authors.Skip(skip).Take(take))
            );
        } 
        else
        {
            return BadRequest();
        }
    }

    [HttpGet("{id}")]
    public IActionResult GetAuthorById(int id)
    {
        var author = _context.Authors.FirstOrDefault( author => author.Id == id );
        if(author == null) return NotFound();
        return Ok(author);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateAuthor(int id, [FromBody] UpdateAuthorDto authorDto)
    {
        var author = _context.Authors.FirstOrDefault(author => author.Id == id);
        if(author == null) return NotFound();
        _mapper.Map(authorDto, author);
        _context.SaveChanges();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteAuthor(int id)
    {
        var author = _context.Authors.FirstOrDefault(author => author.Id == id);
        if(author == null) return NotFound();
        _context.Remove(author);
        _context.SaveChanges();
        return NoContent();
    }
}