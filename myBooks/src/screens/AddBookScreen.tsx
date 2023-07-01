import React from 'react';
import { useRouter } from 'next/router';

import IAuthor from "../interfaces/IAuthor";
import IGenre from "../interfaces/IGenre";
import ListFormField from '../components/ListFormField';
import { colors } from '../themes/theme';
import SimpleFormField from '../components/SimpleFormField';

export default function AddBookScreen(props) {

    const router = useRouter();
    
    const genres: IGenre[] = props.genres;
    const authors: IAuthor[] = props.authors;

    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [genre, setGenre] = React.useState('');

    const [bookAuthors, setBookAuthors] = React.useState([]);
    const [bookGenres, setBookGenres] = React.useState([]);

    async function submitNewBook(event): Promise<void> {
        event.preventDefault();
        const newBook = {
            "title": title,
            "authors": bookAuthors.map((author) => author.id),
            "genres": bookGenres.map((genre) => genre.id),
        };
        const response = await fetch(
            'http://localhost:5233/book/',
            {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newBook),
            }
        );
        if(response.status == 201) {
            router.push('/books');
        } else {
            console.log(response);
        }
    }

    return (
        <main>
            <form method="post" onSubmit={submitNewBook}>
                <div>
                    <SimpleFormField
                        label="Título"
                        inputValue={title}
                        setInputValue={setTitle}
                        placeholder="Digite o título do livro"
                    />
                    <ListFormField
                        label="Autores"
                        referenceList={authors}
                        inputValue={author}
                        setInputValue={setAuthor}
                        inputList={bookAuthors}
                        setInputList={setBookAuthors}
                        placeholder="Digite o nome do autor e clique em adicionar"
                    />
                    <ListFormField
                        label="Gênero"
                        referenceList={genres}
                        inputValue={genre}
                        setInputValue={setGenre}
                        inputList={bookGenres}
                        setInputList={setBookGenres}
                        placeholder="Digite o gênero literário e clique em adicionar"
                    />
                </div>
                <input value="Adicionar Novo Livro" type="submit" />
            </form>
            <style jsx>{`
                main {
                    align-items: center;
                    justify-content: space-around;
                    padding: 2rem;
                }
                form {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                    width: 40%;
                    justify-items: center;
                    margin: auto auto;
                    padding: 1rem;
                    border-radius: 1rem;
                    color: ${colors.primary};
                    background-color: ${colors.darker};
                }
                div {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
                input {
                    cursor: pointer;
                    background-color: ${colors.primary};
                    padding: 0.5rem;
                    border-radius: 1rem;
                    font-weight: 700;
                    transition: all 0.2s ease-in-out;
                }
                input:hover {
                    transform: scale(1.2);
                }
            `}</style>
        </main>
    )
}