import React from 'react';
import { Route } from 'react-router-dom';
import MoviePage from './pages/MoviePage';

const App = () => {
  return (
    <>
      <Route path="/" component={MoviePage} />
    </>
  );
};

export default App;
