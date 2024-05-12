import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/css/BooksPage.css'; // For BooksPage component

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://softwium.com/api/books');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
      setError('An error occurred while fetching books.');
    }
  };

  return (
    <div>
      <h2>Books</h2>
      {error ? (
        <div>{error}</div>
      ) : (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BooksPage;
