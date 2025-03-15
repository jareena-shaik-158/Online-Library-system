import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BookDetails.css"; // Import CSS file

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const book = useSelector((state) => state.books.find((b) => b.id === parseInt(id)));

    if (!book) return <h2 className="book-not-found">Book Not Found</h2>;

    return (
        <div className="book-details-container">
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author"><strong>Author:</strong> {book.author}</p>
            <p className="book-description">
                <strong>Description:</strong> {book.description ? book.description : "No description available."}
            </p>
            <button className="back-button" onClick={() => navigate(-1)}>Back to Browse</button>
        </div>
    );
};

export default BookDetails;
