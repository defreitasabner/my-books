
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

using BooksAPI.Data;
using BooksAPI.Data.Dtos;
using BooksAPI.Models;

[ApiController]
[Route("[controller]")]
public class GenreController : ControllerBase
{
    private MyBooksContext _context;
    private IMapper _mapper;

    public GenreController(MyBooksContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public IActionResult CreateGenre([FromBody] CreateGenreDto genreDto)
    {
        Genre genre = _mapper.Map<Genre>(genreDto);
        _context.Genres.Add(genre);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetGenreById), new { id = genre.Id }, genre);
    }

    [HttpGet]
    public IActionResult GetGenres([FromQuery] int page = 1, [FromQuery] int quantity = 10)
    {
        if(page <= 0 && quantity <= 0) return BadRequest();
        int skip = quantity * (page - 1);
        return Ok(
            _mapper.Map<List<ReadGenreDto>>(_context.Genres.Skip(skip).Take(quantity).ToList())
        );
    }

    [HttpGet("{id}")]
    public IActionResult GetGenreById(int id)
    {
        var genre = _context.Genres.FirstOrDefault(genre => genre.Id == id);
        if(genre == null) return NotFound();
        return Ok(_mapper.Map<ReadGenreDto>(genre));
    }

    [HttpPut("{id}")]
    public IActionResult UpdateGenre(int id, [FromBody] UpdateGenreDto genreDto)
    {
        var genre = _context.Genres.FirstOrDefault(genre => genre.Id == id);
        if(genre == null) return NotFound();
        _mapper.Map(genreDto, genre);
        _context.SaveChanges();
        return NoContent();
    }

    [HttpDelete]
    public IActionResult DeleteGenre(int id)
    {
        var genre = _context.Genres.FirstOrDefault(genre => genre.Id == id);
        if(genre == null) return NotFound();
        _context.Remove(genre);
        return NoContent();
    }
}