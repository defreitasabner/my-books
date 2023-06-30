import IAuthor from "../../interfaces/IAuthor";
import { colors } from "../../themes/theme";

export default function AboutAuthorsSection(props) {
    const authors: IAuthor[] = props.authors;
    return (
        <section>
            <h3>Sobre o Autor</h3>
            {
                authors.map((author) => (
                <article key={author.id}>
                    <img src="https://github.com/defreitasabner.png" alt="" />
                    <div>
                        <h4>{author.name}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis gravida justo, a scelerisque lorem. Donec elementum aliquam dui, in fringilla purus condimentum ac. Sed at magna dolor. Fusce convallis risus massa, vel bibendum ipsum sollicitudin eu. Nullam gravida bibendum aliquet. Ut ac risus mi. Mauris felis magna, imperdiet eget nibh ac, efficitur placerat enim. Vivamus eleifend est vel purus facilisis, laoreet facilisis diam porttitor. Pellentesque nec placerat lacus. Pellentesque consectetur feugiat ex, id lobortis lorem ultricies vitae. Praesent quis velit consectetur, cursus leo sit amet, vestibulum lorem. Aliquam vel nibh sed magna hendrerit dignissim vitae eu ligula. Praesent eget risus nec mi imperdiet feugiat vitae id libero. Mauris a odio felis. Donec non erat tempus, viverra eros rutrum, commodo sapien. Nulla id viverra est. Mauris vulputate, dui a sodales maximus, nisl leo suscipit neque, quis molestie lacus magna in mi. Phasellus nec urna vulputate, lobortis massa quis, hendrerit tellus.</p>
                    </div>
                </article>
                ))
            }
            <style jsx>{`
                section {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
                h3 {
                    font-size: 2rem;
                    font-weight: 700;
                }
                article {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                    background-color: ${colors.darker};
                    border-radius: 2rem;
                    padding: 2rem;
                    color: ${colors.secondary};
                }
                img {
                    width: 240px;
                    border-radius: 50%;
                }
                div {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
                h4 {
                    font-size: 1.5rem;
                    font-weight: 700;
                }
                p {
                    font-size: 1.2rem;
                    text-align: justify;
                }
            `}</style>
        </section>
    )
}