export default function HomeScreen ({ books }) {
    
    return (
        <div>
            <ul>
                {books.map(book => <li>{book.title}</li>)}
            </ul>
        </div>
    )
}

HomeScreen.getInitialProps = async () => {
    const response = await fetch("http://localhost:5233/book/");
    const books = await response.json();
    return { books };
}