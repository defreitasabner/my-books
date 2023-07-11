import IAuthor from "../interfaces/IAuthor"

class AuthorModel
{
    private id: number;
    public name: string;

    constructor(id: number, name: string) 
    {
        this.id = id;
        this.name = name;
    }

    public static fromJson({ id, name }: IAuthor): AuthorModel
    {
        return new AuthorModel(id, name); 
    }

    public toJson(): IAuthor
    {
        const author = {
            "id": this.id,
            "name": this.name,
        };
        return author;
    }
}

export default AuthorModel;