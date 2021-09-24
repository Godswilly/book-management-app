import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
  const [book, setBook] = useState({
    bookName: props.bookName ? props.book.bookName : '',
    author: props.author ? props.book.author : '',
    quantity: props.quantity ? props.book.quantity : '',
    price: props.price ? props.book.price : '',
    date: props.date ? props.book.date : '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const {
    bookName,
    author,
    price,
    quantity,
  } = book;

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = [bookName, author, price, quantity];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookName,
        author,
        price,
        quantity,
        date: new Date(),
      };
      props.handleSubmit(book);
    } else {
      errorMsg = 'Please fill out all fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };
};

export default BookForm;
