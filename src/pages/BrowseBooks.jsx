import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BrowseBooks.css"; // Import CSS file

const BrowseBooks = () => {
    const { category } = useParams();
    const [search, setSearch] = useState("");
    const books = useSelector((state) => state.books);

    console.log("Books in Redux Store:", books); // Debugging 🔍

    if (!books || books.length === 0) {
        return <h3 className="no-books">No books available. Add books first!</h3>;
    }

    const filteredBooks = books.filter(
        (book) =>
            (category === "all" || book.category.toLowerCase() === category.toLowerCase()) &&
            (book.title.toLowerCase().includes(search.toLowerCase()) ||
                book.author.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="browse-books-container">
            <h2 className="browse-books-title">Browse Books - {category.toUpperCase()}</h2>

            {/* Search Bar */}
            <input
                type="text"
                className="search-bar"
                placeholder="Search by title or author..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Books List */}
            <div className="books-list">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <div className="book-card" key={book.id}>
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <Link to={`/book/${book.id}`} className="book-link">
                                View Details
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="no-books">No books found for this category.</p>
                )}
            </div>
        </div>
    );
};

export default BrowseBooks;
