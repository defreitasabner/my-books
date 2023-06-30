import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <li>
                <Link href="/books">
                    Livros
                </Link>
            </li>
            <li>
                <Link href="/authors">
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
            `}</style>
        </nav>
    )
}