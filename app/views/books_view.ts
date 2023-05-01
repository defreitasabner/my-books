import { Books } from "../models/books.js";
import { View } from "./view.js";

export class BooksView extends View<Books> {

    template(model: Books): string {
        return `
            <table class="table">
                <thead>
                    <tr>
                        <th>TÍTULO</th>
                        <th>AUTOR</th>
                        <th>GÊNEROS</th>
                        <th>PÁGINAS</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        model.list().map(
                            (book) => {
                                return `
                                <tr>
                                    <td>${book.title}</td>
                                    <td>${book.author}</td>
                                    <td>${book.genders}</td>
                                    <td>${book.pageNumber}</td>
                                </tr>
                                `
                            }
                        ).join('')
                    }
                </tbody>
            </table>
        `;
    }
}