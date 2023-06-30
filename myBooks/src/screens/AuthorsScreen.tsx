import IAuthor from "../interfaces/IAuthor"

export default function AuthorsScreen(props) {
    const authors: IAuthor[] = props.authors;
    return (
        <main>
            {authors.map((author) => <p>{author.name}</p>)}
        </main>
    )
}