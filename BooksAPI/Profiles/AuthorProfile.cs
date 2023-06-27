using AutoMapper;

using BooksAPI.Data.Dtos;
using BooksAPI.Models;

namespace BooksAPI.Profiles;

public class AuthorProfile : Profile
{
    public AuthorProfile()
    {
        CreateMap<CreateAuthorDto, Author>();
        CreateMap<UpdateAuthorDto, Author>();
        CreateMap<Author, ReadAuthorDto>();
    }
}