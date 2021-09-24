import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BookLists from '../components/BookLists';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div>
          <Switch>
            <Route path="/" exact={true} component={BookLists} />
            <Route path="/add" component={AddBook} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
