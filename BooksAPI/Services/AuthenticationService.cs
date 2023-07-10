
using AutoMapper;
using BooksAPI.Data.Dtos;
using BooksAPI.Models;
using Microsoft.AspNetCore.Identity;

namespace BooksAPI.Services;

public class AuthenticationService
{
    private IMapper _mapper;
    private UserManager<User> _userManager;
    private SignInManager<User> _signinManager;

    public AuthenticationService(
        IMapper mapper, 
        UserManager<User> userManager, 
        SignInManager<User> signinManager
    )
    {
        _mapper = mapper;
        _userManager = userManager;
        _signinManager = signinManager;
    }

    public async Task RegisterNewUser(CreateUserDto userDto)
    {
        User user = _mapper.Map<User>(userDto);
        IdentityResult result = await _userManager.CreateAsync(user, userDto.Password);
        if(!result.Succeeded) throw new ApplicationException("Failed to register new user ...");
    }

    public async Task LoginUser(LoginUserDto userDto)
    {
        var result = await _signinManager.PasswordSignInAsync(
            userDto.Username,
            userDto.Password,
            false,
            false
        );
        if(!result.Succeeded) throw new ApplicationException("Failed to login");
    }
}