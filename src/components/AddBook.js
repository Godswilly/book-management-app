import React from 'react';
import BookForm from './BookForm';

const AddBook = ({ history, books, setBooks }) => {
  const handleSubmit = (book) => {
    setBooks([books, ...books]);
    history.push('/');
  };

  return (
    <>
      <BookForm handleSubmit={handleSubmit} />
    </>
  );
};

export default AddBook;
