import { Book } from "../models/book.js";
import { Books } from "../models/books.js";
import { BooksView } from "../views/books_view.js";

export class BookController {
    private inputTitle: HTMLInputElement;
    private inputAuthor: HTMLInputElement;
    private inputGenders: HTMLInputElement;
    private inputPageNumber: HTMLInputElement;
    private books: Books = new Books();
    private view: BooksView = new BooksView('[data-table-container]');

    constructor() {
        this.inputTitle = document.querySelector('[data-title]') as HTMLInputElement;
        this.inputAuthor = document.querySelector('[data-author]') as HTMLInputElement;
        this.inputGenders = document.querySelector('[data-genders]') as HTMLInputElement;
        this.inputPageNumber = document.querySelector('[data-page-number]') as HTMLInputElement;
        this.view.render(this.books);
    }

    addNewBook(): void {
        const listGendersTreated: string[] = this.inputGenders.value.split(',').map(
            (gender) => gender.split(' ').join('').toLowerCase()
        );
        const pageNumberTreated = Number(this.inputPageNumber.value);
        const newBook = new Book(
            this.inputTitle.value,
            this.inputAuthor.value,
            listGendersTreated,
            pageNumberTreated,
        );
        this.books.add(newBook);
        this.view.render(this.books);
        this.cleanForm();
    }

    cleanForm() {
        this.inputTitle.value = '';
        this.inputAuthor.value = '';
        this.inputGenders.value = '';
        this.inputPageNumber.value = '';
        this.inputTitle.focus();
    }

}