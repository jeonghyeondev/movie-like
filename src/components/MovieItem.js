import React from 'react';
import styled from 'styled-components';

const MovieItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  flex-basis: 50%;
  box-sizing: border-box;
  .item_area {
    display: flex;
    justify-content: space-between;
  }
  img {
    width: 70px;
    height: 100px;
  }
`;

const MovieItem = (props) => {
  const { id, title, image, subtitle, pubDate, actor, userRating } = props;
  const DEFAULT_IMAGE = 'https://via.placeholder.com/70x100';
  const poster = image === '' ? DEFAULT_IMAGE : image;

  return (
    <MovieItemBlock>
      <div className="movie_area" id={id}>
        <h3 className="movie_title">
          <a href={id} target="_blank">
            {title.replace(/<b>/gi, '').replace(/<\/b>/gi, '')}
          </a>
        </h3>
        <p className="movie_subtitle">{subtitle}</p>
        <p className="movie_rating">
          <span>평점</span> {userRating}
        </p>
        <p className="movie_data">
          <span>개봉</span> {pubDate}
        </p>
        <p className="movie_actor">
          <span>출연</span> {actor}
        </p>
        <img src={poster} alt={title} />
      </div>
    </MovieItemBlock>
  );
};

export default MovieItem;
