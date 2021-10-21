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
import BooksContext from '../context/BooksContext';

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);

  return (
  <BrowserRouter>
    <div>
      <Header />
      <div className="main-content">
        <BooksContext.Provider value={{books, setBooks}}>
          <Switch>
            <Route component={BookLists} path="/" exact={true} />
            <Route component={AddBook} path="/add" />
            <Route component={EditBook} path="/edit/:id" />
            <Route component={() => <Ridirect to="/" />} />
          </Switch>
        </BooksContext.Provider>
      </div>
    </div>
  </BrowserRouter>
  )
}

export default AppRouter;
