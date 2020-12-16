import React from 'react';
import styled from 'styled-components';
import MovieItem from './MovieItem';
import { items } from '../data/index';

const MovieListBlock = styled.div`
  width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MovieList = () => {
  return (
    <MovieListBlock>
      {items.map((item, id) => (
        <MovieItem
          key={id}
          title={item.title}
          link={item.link}
          image={item.image}
          subtitle={item.subtitle}
          pubDate={item.pubDate}
          actor={item.actor}
          userRating={item.userRating}
        />
      ))}
    </MovieListBlock>
  );
};

export default MovieList;
