import React, { useContext } from 'react';
import PropTypes from 'prop-types';
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

AddBook.propTypes = {
  history: PropTypes.string.isRequired,
};

export default AddBook;
