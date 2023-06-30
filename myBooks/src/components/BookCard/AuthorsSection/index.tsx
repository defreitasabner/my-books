import IAuthor from "../../../interfaces/IAuthor";

export default function AuthorsSection(props) {
    const authors: IAuthor[] = props.authors;
    return (
        <section>
            {authors.map((author) => <h4 key={author.id} >{author.name}</h4>)}
            <style jsx>{`
                section {
                    display: flex;
                    flex-direction: column;
                }
                h4 {
                    margin: 0;
                }
            `}</style>
        </section>
    )
}