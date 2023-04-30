import { BookController } from "./controller/book_controller.js";

const bookController = new BookController();
const form = document.querySelector('[data-main-form]');

form.addEventListener(
    'submit', event => {
        event.preventDefault();
        bookController.addNewBook();
    }
)