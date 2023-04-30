import { Book } from "../models/book.js";
import { Books } from "../models/books.js";

export class BookController {
    private inputTitle: HTMLInputElement;
    private inputAuthor: HTMLInputElement;
    private inputGenders: HTMLInputElement;
    private inputPageNumber: HTMLInputElement;
    private books: Books = new Books();

    constructor() {
        this.inputTitle = document.querySelector('[data-title]');
        this.inputAuthor = document.querySelector('[data-author]');
        this.inputGenders = document.querySelector('[data-genders]');
        this.inputPageNumber = document.querySelector('[data-page-number]');
    }

    addNewBook(): void {
        const listGendersTreated: string[] = this.inputGenders.value.split(',');
        const pageNumberTreated = Number(this.inputPageNumber.value);
        const newBook = new Book(
            this.inputTitle.value,
            this.inputAuthor.value,
            listGendersTreated,
            pageNumberTreated,
        );
        this.books.add(newBook);
    }

}