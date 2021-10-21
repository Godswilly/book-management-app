import React, { useContext } from 'react';
import BookForm from './BookForm';
import BookContext from '../context/BooksContext';

const AddBook = ({ history }) => {
  const { books, setBooks } = useContext(BookContext);

  const handleSubmit = (book) => {
    setBooks([book, ...books]);
    history.push('/');
  };

  return (
    <>
      <BookForm handleSubmit={handleSubmit} />
    </>
  );
};

export default AddBook;
