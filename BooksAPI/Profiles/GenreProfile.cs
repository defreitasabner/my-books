using AutoMapper;

using BooksAPI.Models;
using BooksAPI.Data.Dtos;

public class GenreProfile : Profile
{
    public GenreProfile()
    {
        CreateMap<CreateGenreDto, Genre>();
        CreateMap<Genre, ReadGenreDto>();
        CreateMap<UpdateGenreDto, Genre>();
    }
}