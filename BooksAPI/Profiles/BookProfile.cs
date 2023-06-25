using AutoMapper;

using BookAPI.Data.Dtos;
using BookAPI.Models;

namespace BooksAPI.Profiles;

public class BookProfile : Profile
{
    public BookProfile()
    {
        CreateMap<CreateBookDto, Book>();
        CreateMap<UpdateBookDto, Book>();
        CreateMap<Book, ReadBookDto>();
    }
}