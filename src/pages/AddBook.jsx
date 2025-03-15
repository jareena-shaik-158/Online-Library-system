import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";
import "./AddBook.css"; // Import the new CSS file

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() && author.trim()) {
            dispatch(addBook({ id: Date.now(), title, author }));
            navigate("/books/all");
        }
    };

    return (
        <div className="add-book-container">
            <div className="add-book-card">
                <h2>Add a New Book 📖</h2>
                <form onSubmit={handleSubmit} className="add-book-form">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="input-field"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="input-field"
                        required
                    />
                    <button type="submit" className="submit-btn">Add Book</button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;
