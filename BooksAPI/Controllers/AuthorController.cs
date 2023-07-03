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
    private readonly MyBooksContext _context;
    private readonly IMapper _mapper;

    public AuthorController(MyBooksContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public IActionResult CreateAuthor([FromBody] CreateAuthorDto authorDto)
    {
        Author author = _mapper.Map<Author>(authorDto);
        _context.Authors.Add(author);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetAuthorById), new { id = author.Id }, author);
    }

    [HttpGet]
    public IActionResult GetAuthors(
        [FromQuery] string name = "",
        [FromQuery] int page = 1, 
        [FromQuery] int pageSize = 10
    )
    {
        if(page > 0 && pageSize > 0)
        {
            int skip = pageSize * (page - 1);
            int take = pageSize;
            if(name.Length == 0)
            {
                return Ok(
                    _mapper.Map<List<ReadAuthorDto>>(
                        _context.Authors
                            .Skip(skip)
                                .Take(take)
                                    .ToList()
                    )
                );
            }
            return Ok(
                _mapper.Map<List<ReadAuthorDto>>(
                    _context.Authors
                        .Where(author => author.Name.Contains(name))
                            .Skip(skip)
                                .Take(take)
                                    .ToList()
                )
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
        return Ok(_mapper.Map<ReadAuthorDto>(author));
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