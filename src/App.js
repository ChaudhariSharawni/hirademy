import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import BookDetailsPage from './pages/BookDetailsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/books/:id" element={<BookDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
