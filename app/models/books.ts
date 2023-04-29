import { Book } from './book.js';

export class Books {
    private books: Array<Book> = [];

    add(book: Book): void {
        this.books.push(book);
    }

    list(): ReadonlyArray<Book> {
        return this.books;
    }
}