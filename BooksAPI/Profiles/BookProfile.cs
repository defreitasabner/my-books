using AutoMapper;

using BooksAPI.Data.Dtos;
using BooksAPI.Models;

namespace BooksAPI.Profiles;

public class BookProfile : Profile
{
    public BookProfile()
    {
        CreateMap<CreateBookDto, Book>();
        CreateMap<UpdateBookDto, Book>();
        CreateMap<Book, ReadBookDto>()
            .ForMember(readBookDto => readBookDto.Authors,
                opt => opt.MapFrom(book => book.Authors))
            .ForMember(readBookDto => readBookDto.Genres,
                opt => opt.MapFrom(book => book.Genres));
    }
}