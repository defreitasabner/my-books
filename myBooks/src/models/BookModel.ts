import IBook from "../interfaces/IBook";
import AuthorModel from "./AuthorModel";
import GenreModel from "./GenreModel";

class BookModel
{
    private id: number;
    public title: string;
    public authors: AuthorModel[];
    public genres: GenreModel[];

    constructor(
        id: number,
        title: string,
        authors: AuthorModel[],
        genres: GenreModel[],
    ) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.genres = genres;
    }

    public static fromJson({ id, title, authors, genres }: IBook): BookModel
    {
        return new BookModel(
            id, 
            title, 
            authors.map(author => AuthorModel.fromJson(author)), 
            genres.map(genre => GenreModel.fromJson(genre)),
        );
    }

    public toJson(): IBook
    {
        const book = {
            "id": this.id,
            "title": this.title,
            "authors": this.authors.map(author => author.toJson()),
            "genres": this.genres.map(genre => genre.toJson()),
        };
        return book;
    }
}

export default BookModel;