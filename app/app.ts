import { Book } from "./models/book.js";
import { Books } from "./models/books.js";

const bookList: Books = new Books();
const book: Book = new Book('Grande Sertão Veredas', 'Guimarães Rosa', ['nacional', 'ficção'], 700);

bookList.add(book);

console.log(book);
console.log(bookList.list());