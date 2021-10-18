import React from 'react';
import { useParams } from 'react-router-dom';
import BookForm from './BookForm';

const EditBook = ({ history, books, setBooks }) => {
  const { id } = useParams();
  const bookToEdit = books.find((book) => book.id === id);
  
  const handleSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...filteredBooks]);
    history.push('/');
  };

  return (
    <div>
      <BookForm book={bookToEdit} handleSubmit={handleSubmit}/>
    </div>
  );
};

export default EditBook;
