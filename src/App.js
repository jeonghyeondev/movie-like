import React from 'react';
import { Route } from 'react-router-dom';
import MoviePage from './pages/MoviePage';

const App = () => {
  return (
    <>
      <Route path="/movie-like" component={MoviePage} />
    </>
  );
};

export default App;
