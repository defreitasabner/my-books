import IAuthor from './IAuthor';
import IGenre from './IGenre';

interface IBook {
    id: number,
    title: string,
    authors: IAuthor[],
    genres: IGenre[],
}

export default IBook;