using AutoMapper;
using BooksAPI.Data.Dtos;
using BooksAPI.Models;

namespace BooksAPI.Profiles;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<CreateUserDto, User>();
    }
}