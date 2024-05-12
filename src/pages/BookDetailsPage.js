import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import '../components/css/BookDetailsPage.css';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  const fetchBook = useCallback(async () => {
    try {
      const response = await fetch(`https://softwium.com/api/books/${id}`);
      const data = await response.json();
      setBook(data);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  }, [id]);

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

  return (
    <div>
      <h2>Book Details</h2>
      {book && (
        <div>
          <p>Title: {book.title}</p>
          <p>ISBN: {book.isbn}</p>
          <p>PageCount: {book.pageCount}</p>
          <p>Authors: {book.authors.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default BookDetailsPage;
