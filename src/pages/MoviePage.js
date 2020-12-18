import React from 'react';
import MovieList from '../components/MovieList';
import styled from 'styled-components';

const MoviePageBlock = styled.div`
  max-width: 980px;
  margin: 0 auto;
  h1 {
    a {
      display: block;
      padding: 40px 0;
      font-size: 45px;
      color: #c0a789;
      text-align: center;
    }
  }
`;

const MoviePage = () => {
  return (
    <MoviePageBlock>
      <h1>
        <a href="/">Movie Like</a>
      </h1>
      <MovieList />
    </MoviePageBlock>
  );
};

export default MoviePage;
