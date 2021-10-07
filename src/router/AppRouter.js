import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BookLists from '../components/BookLists';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);

  return (
  <BrowserRouter>
    <div>
      <Header />
      <div className="main-content">
        <Switch>
          <Route path="/" exact component={BookLists} />
          <Route
            render={(props) => (
              <AddBook {...props} books={books} setBooks={setBooks} />
            )}
            path="/add"
          />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
  )
}

export default AppRouter;
