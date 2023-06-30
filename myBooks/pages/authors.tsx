import AuthorsScreen from "../src/screens/AuthorsScreen";

export async function getServerSideProps() {
    const response = await fetch('http://localhost:5233/author/');
    const authors = await response.json();
    return {
        props: { authors }
    }
}

export default AuthorsScreen;