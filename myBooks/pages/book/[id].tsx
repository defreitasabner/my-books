import BookScreen from "../../src/screens/BookScreen";

export async function getServerSideProps(context) {
    const response = await fetch(`http://localhost:5233/book/${context.params.id}`);
    const book = await response.json();
    return {
        props: book
    }
}

export default BookScreen;