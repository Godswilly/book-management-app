import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Book = ({
  id,
  bookName,
  author,
  price,
  quantity,
  date,
  handleRemoveBook,
}) => {
  const history = useHistory();

  return (
    <>
      <Card style={{ width: '18rem' }} className="book">
        <Card.Body>
          <Card.Title className="book-title">{bookName}</Card.Title>
          <div className="book-details">
            <div>
              Author:
              {author}
            </div>
            <div>
              Quantity:
              {quantity}
            </div>
            <div>
              Price:
              {price}
            </div>
            <div>
              Date:
              {new Date(date).toDateString()}
            </div>
          </div>
          <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
            Edit
          </Button>
          {/* {''} */}
          <Button variant="danger" onClick={() => handleRemoveBook(id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  bookName: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
