import { BookController } from "./controllers/book_controller.js";

const bookController = new BookController();
const form = document.querySelector('[data-main-form]');

if(form) {
    form.addEventListener(
        'submit', event => {
            event.preventDefault();
            bookController.addNewBook();
        }
    )
} else {
    throw Error();
}