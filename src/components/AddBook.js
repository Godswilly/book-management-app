import React from 'react';
import BookForm from './BookForm';

const AddBook = () => {
  const handleSubmit = (book) => {
    // console.log(book);
  };

  return (
    <>
      <BookForm handleSubmit={handleSubmit} />
    </>
  );
};

export default AddBook;
