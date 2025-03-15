import { Link } from "react-router-dom";

const BookList = ({ books }) => {
    return (
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    {book.title} - {book.author} <Link to={`/book/${book.id}`}>View Details</Link>
                </li>
            ))}
        </ul>
    );
};

export default BookList;
