export class BookController {
    private inputTitle: HTMLInputElement;
    private inputAuthor: HTMLInputElement;
    private inputGenders: HTMLInputElement;
    private inputPageNumber: HTMLInputElement;
    //TODO: Criar o formulário
    constructor() {
        this.inputTitle = document.querySelector('#title');
        this.inputAuthor = document.querySelector('#author');
        this.inputGenders = document.querySelector('#genders');
        this.inputPageNumber = document.querySelector('#pageNumber');
    }
}