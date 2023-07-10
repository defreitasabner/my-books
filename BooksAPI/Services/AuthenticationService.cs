
using AutoMapper;
using BooksAPI.Data.Dtos;
using BooksAPI.Models;
using Microsoft.AspNetCore.Identity;

namespace BooksAPI.Services;

public class AuthenticationService
{
    private IMapper _mapper;
    private UserManager<User> _userManager;

    public AuthenticationService(IMapper mapper, UserManager<User> userManager)
    {
        _mapper = mapper;
        _userManager = userManager;
    }

    public async Task RegisterNewUser(CreateUserDto userDto)
    {
        User user = _mapper.Map<User>(userDto);
        IdentityResult result = await _userManager.CreateAsync(user, userDto.Password);
        if(!result.Succeeded) throw new ApplicationException("Failed to register new user ...");
    }
}