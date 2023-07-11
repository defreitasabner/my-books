import IGenre from "../interfaces/IGenre";

class GenreModel
{
    private id: number;
    public name: string;

    constructor(id: number, name: string)
    {
        this.id = id;
        this.name = name;
    }

    public static fromJson({ id, name } : IGenre ): GenreModel
    {
        return new GenreModel(id, name);
    }

    public toJson(): IGenre
    {
        const genre = {
            "id": this.id,
            "name": this.name,
        };
        return genre;
    }
}

export default GenreModel;