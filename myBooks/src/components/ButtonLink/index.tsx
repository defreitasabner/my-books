import Link from "next/link"
import { colors } from "../../themes/theme"

export default function ButtonLink({ text, url }) {
    return (
        <div>
            <Link href={ url }>
                <button>{ text }</button>
            </Link>
            <style jsx>{`
                button {
                    padding: 0.5rem 1rem;
                    background-color: ${colors.background};
                    border: none;
                    border-radius: 1rem;
                    color: ${colors.secondary};
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;
                }
                button:hover {
                    transform: scale(1.2);
                }
            `}</style>
        </div>
    )
}