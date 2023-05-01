import { Book } from './book.js';

export class Books {
    private books: Array<Book> = [];

    public add(book: Book): void {
        this.books.push(book);
    }

    public list(): readonly Book[] {
        return this.books;
    }
}