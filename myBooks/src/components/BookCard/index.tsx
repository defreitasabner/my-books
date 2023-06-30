import IBook from "../../interfaces/IBook";
import { colors } from "../../themes/theme";

export default function BookCard({ title, authors, genres } : IBook) {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                {authors.map((author) => <h4 key={author.id} >{author.name}</h4>)}
            </div>
            <div>
                {genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
            </div>
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                    background-color: ${colors.darker};
                    color: ${colors.secondary};
                    border-radius: 1rem;
                    padding: 1rem;
                }
                h3 {
                    font-size: 1.2rem;
                    font-weight: 700;
                }
            `}</style>
        </div>
    )
}