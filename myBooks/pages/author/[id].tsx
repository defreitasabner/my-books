import AuthorScreen from "../../src/screens/AuthorScreen";

export async function getServerSideProps(context) {
    const response = await fetch(`http://localhost:5233/author/${context.params.id}`);
    const author = await response.json()
    return {
        props: { author }
    }
}

export default AuthorScreen;