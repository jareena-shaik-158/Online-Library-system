import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: "1984", author: "George Orwell", category: "fiction" },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", category: "fiction" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", category: "fiction" },
    { id: 4, title: "Sapiens", author: "Yuval Noah Harari", category: "non-fiction" },
    { id: 5, title: "The Psychology of Money", author: "Morgan Housel", category: "non-fiction" },
    { id: 6, title: "Dune", author: "Frank Herbert", category: "sci-fi" },
    { id: 7, title: "The Martian", author: "Andy Weir", category: "sci-fi" },
    { id: 8, title: "Sherlock Holmes", author: "Arthur Conan Doyle", category: "mystery" },
    { id: 9, title: "Gone Girl", author: "Gillian Flynn", category: "mystery" },
    { id: 10, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "self-help" }
];

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
