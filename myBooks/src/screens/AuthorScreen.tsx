import IAuthor from "../interfaces/IAuthor";

export default function AuthorScreen(props) {
    const author: IAuthor = props.author;
    return (
        <main>
            <section>
                <img src="https://github.com/defreitasabner.png" alt={author.name} />
                <div>
                    <h2>{author.name}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu</p>
                </div>
            </section>
            <style jsx>{`
                main {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    padding: 2rem;
                    gap: 2rem;
                }
                section {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    gap: 1rem;
                }
                img {
                    width: 196px;
                    border-radius: 50%;
                }
                div {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
                h2 {
                    font-size: 2rem;
                    font-weight: 700;
                }
                p {
                    font-size: 1.5rem;
                }
            `}</style>
        </main>
    )
}