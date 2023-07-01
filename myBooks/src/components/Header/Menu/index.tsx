import Link from "next/link";
import { colors } from "../../../themes/theme";

export default function Menu() {
    return (
        <nav>
            <li>
                <Link href="/books" style={{textDecoration: 'none', color: colors.secondary}}>
                    Livros
                </Link>
            </li>
            <li>
                <Link href="/authors" style={{textDecoration: 'none', color: colors.secondary}}>
                    Autores
                </Link>
            </li>
            <style jsx>{`
                nav {
                    display: flex;
                    flex-direction: row;
                    list-style-type: none; 
                    width: 30%;
                    justify-content: space-evenly;
                    align-items: center;
                }
                nav li {
                    font-size: 1.2rem;
                }
                nav li:hover {
                    transform: scale(1.2);
                }
            `}</style>
        </nav>
    )
}