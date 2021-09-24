import React from 'react';
import BookForm from './BookForm';

const AddBook = () => {
  const handleSubmit = (book) => {
    console.log(book);
  };

  return (
    <React.Fragment>
      <BookForm handleSubmit={handleSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
