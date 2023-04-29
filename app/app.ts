import { Book } from "./models/book.js";
import { Books } from "./models/books.js";

const bookList = new Books();
const book = new Book('Grande Sertão Veredas', 'Guimarães Rosa', ['nacional', 'ficção'], 700);
const book2 = new Book('Clube da Luta', 'Chuck Palahniuk', ['ficção'], 200);

bookList.add(book);
bookList.add(book2);

console.log(book);
console.log(bookList.list());