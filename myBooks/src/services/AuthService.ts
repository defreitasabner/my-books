class AuthService extends BaseService
{
    private _registerUrl: string = this._baseUrl + "user/register/"
    private _loginUrl: string = this._baseUrl + "user/login/"

    constructor() { super() }

    public async register(
        { username, email, password, passwordCheck } : IRegisterCredentials
    ) : Promise<boolean>
    {
        try
        {
            const newUser = {
                "username": username,
                "email": email,
                "password": password,
                "passwordCheck": passwordCheck,
            };
            const response = await this._middleware.post(this._registerUrl, newUser);
            if(response.status == 200) return true;
        }
        catch {}
        return false;
    }

    public async login(credentials: ILoginCredentials) : Promise<boolean>
    {
        try
        {
            const response = await this._middleware.post(this._loginUrl, credentials);
            if(response.status == 200) return true;
        }
        catch {}
        return false;
    }
}