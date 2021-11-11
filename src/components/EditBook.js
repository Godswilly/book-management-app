import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookContext from '../context/BooksContext';
import BookForm from './BookForm';

const EditBook = ({ history }) => {
  const { books, setBooks } = useContext(BookContext);
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);

  const handleSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push('/');
  };

  return (
    <div>
      <BookForm book={bookToEdit} handleSubmit={handleSubmit} />
    </div>
  );
};

EditBook.propTypes = {
  history: PropTypes.string.isRequired,
};

export default EditBook;
