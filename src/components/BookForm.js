import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
  const [book ,setBook] = useState({
    bookName: props.bookName ? props.book.bookName : '',
    author: props.author ? props.book.author : '',
    quantity: props.quantity ? props.book.quantity : '',
    price: props.price ? props.book.price : '',
    date: props.date ? props.book.date : '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { bookname, author, price, quantity } = book;
}

export default BookForm;
