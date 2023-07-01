import Link from "next/link";
import { colors } from "../../themes/theme";
import IAuthor from "../../interfaces/IAuthor";

export default function AuthorCard({ id, name } : IAuthor) {
    return (
        <article>
            <img src="https://github.com/defreitasabner.png" alt="" />
            <Link href={`author/${id}`} style={{textDecoration: 'none', color: colors.secondary}}>
                <h3>{name}</h3>
            </Link>
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