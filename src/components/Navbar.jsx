import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>📚 Online Library</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/books/all">Browse Books</Link></li>
                <li><Link to="/add-book">Add Book</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
