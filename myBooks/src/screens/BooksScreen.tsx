import IBook from "../../src/interfaces/IBook";
import BookCard from "../components/BookCard";

export default function BooksScreens(prop) {
    const books: IBook[] = prop.books;
    return (
        <main>
            <div>
                {books.map((book) => <BookCard key={book.id} {...book} />)}
            </div>
            <style jsx>{`
                main {
                    padding: 1.5rem;
                }
                div {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1rem;
                }
            `}</style>
        </main>
    );
}