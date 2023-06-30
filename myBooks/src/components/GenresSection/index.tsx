import IGenre from "../../interfaces/IGenre";
import { colors } from "../../themes/theme";

export default function GenresSection(props) {
    const genres: IGenre[] = props.genres;
    return (
        <section>
            {genres.map((genre) => (
                <div>
                    <span key={genre.id}>{genre.name}</span>
                </div>
            ))}
            <style jsx>{`
                section {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                }
                div {
                    background-color: ${colors.primary};
                    border-radius: 0.5rem;
                    padding: 0.5rem;
                    color: ${colors.accent};
                }
            `}</style>
        </section>
    )
}