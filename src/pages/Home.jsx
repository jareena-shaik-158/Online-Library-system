import { Link } from "react-router-dom";
import "./Home.css"; // Import the advanced CSS file

const Home = () => {
    const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery"];
    const popularBooks = [
        { id: 1, title: "1984", author: "George Orwell" },
        { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" }
    ];

    return (
        <div className="home-container">
            <h2 className="home-title">
                Welcome to the Online Library 📚
            </h2>

            {/* Book Categories */}
            <div className="categories-section">
                <h3 className="categories-title">Book Categories</h3>
                <ul className="categories-list">
                    {categories.map((cat) => (
                        <li key={cat}>
                            <Link to={`/books/${cat.toLowerCase()}`}>{cat}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Popular Books */}
            <div className="popular-books-section">
                <h3 className="popular-books-title">Popular Books</h3>
                <ul className="popular-books-list">
                    {popularBooks.map((book) => (
                        <li key={book.id}>
                            {book.title} - {book.author}
                            <Link to={`/book/${book.id}`}> View Details</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
