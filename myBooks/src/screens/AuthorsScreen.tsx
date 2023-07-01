import AuthorCard from "../components/AuthorCard";
import SearchAddSection from "../components/SearchAddSection";
import IAuthor from "../interfaces/IAuthor"

export default function AuthorsScreen(props) {
    const authors: IAuthor[] = props.authors;
    return (
        <main>
            <SearchAddSection />
            <div>
                {authors.map((author) => <AuthorCard key={author.id} {...author} />)}
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
    )
}