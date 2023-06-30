import AboutAuthorsSection from "../components/AboutAuthorsSection";
import AboutBookSection from "../components/AboutBookSection";
import IBook from "../interfaces/IBook";

export default function BookScreen( { title, authors, genres } : IBook ) {
    return (
        <main>
            <AboutBookSection title={title} genres={genres} />
            <AboutAuthorsSection authors={authors} />
            <style jsx>{`
                main {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    padding: 2rem;
                    gap: 2rem;
                }
            `}</style>
        </main>
    )
}