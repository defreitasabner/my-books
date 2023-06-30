import IBook from "../interfaces/IBook";

export default function BookScreen( book : IBook ) {
    return (
        <div>
            <h1>{book.title}</h1>
        </div>
    )
}