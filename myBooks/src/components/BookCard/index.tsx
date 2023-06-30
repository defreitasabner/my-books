import Link from "next/link";
import IBook from "../../interfaces/IBook";
import { colors } from "../../themes/theme";
import AuthorsSection from "./AuthorsSection";
import GenresSection from "./GenresSection";

export default function BookCard({ id, title, authors, genres } : IBook) {
    return (
        <article>
            <img src="https://github.com/defreitasabner.png" alt="" />
            <Link href={`book/${id}`} style={{textDecoration: 'none', color: colors.secondary}}>
                <h3>{title}</h3>
            </Link>
            <AuthorsSection authors={authors} />
            <GenresSection genres={genres} />
            <style jsx>{`
                article {
                    display: grid;
                    grid-template-column: 1fr;
                    gap: 1rem;
                    background-color: ${colors.darker};
                    color: ${colors.secondary};
                    border-radius: 1rem;
                    padding: 1rem;
                    justify-items: center;
                }
                img {
                    width: 300px;
                    border-radius: 1rem;
                }
                h3 {
                    font-size: 1.2rem;
                    font-weight: 700;
                }
            `}</style>
        </article>
    )
}