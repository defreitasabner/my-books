import AddBookScreen from "../src/screens/AddBookScreen";

export async function getServerSideProps(context) {
    const authorsResponse = await fetch('http://localhost:5233/author/');
    const genresResponse = await fetch('http://localhost:5233/genre/');

    const authors = await authorsResponse.json();
    const genres = await genresResponse.json();
    return {
        props: {
            authors,
            genres
        }
    }
}

export default AddBookScreen;
