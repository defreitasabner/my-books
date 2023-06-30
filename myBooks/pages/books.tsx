import BooksScreens from "../src/screens/BooksScreen";

export async function getServerSideProps() {
    const response = await fetch('http://localhost:5233/book/');
    const books = await response.json();
    return {
        props: { books }
    }
}

export default BooksScreens;
