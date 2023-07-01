import IBook from "../../src/interfaces/IBook";
import BookCard from "../components/BookCard";
import SearchAddSection from "../components/SearchAddSection";

export default function BooksScreens(prop) {
    const books: IBook[] = prop.books;
    return (
        <main>
            <SearchAddSection />
            <div>
                {books.map((book) => <BookCard key={book.id} {...book} />)}
            </div>
            <style jsx>{`
                div {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1rem;
                    padding: 1rem 2rem;
                }
            `}</style>
        </main>
    );
}