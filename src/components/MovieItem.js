import React from 'react';
import styled from 'styled-components';

const MovieItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  flex-basis: 47%;
  margin-top: 3%;
  box-sizing: border-box;
  background: #e8e8e8;
  padding: 20px;
  margin: 1.5%;
  a {
    display: flex;
  }
  .item_poster {
    img {
      width: 130px;
    }
  }
  .item_desc {
    margin-left: 20px;
    h3 {
      color: #000;
      font-size: 20px;
      line-height: 1.5;
    }
    p {
      line-height: 1.5;
      color: #4a4a4a;
      span {
        display: inline-block;
        padding-right: 20px;
        color: #af8a5d;
      }
    }
    .movie_subtitle {
      margin-bottom: 20px;
    }
  }
`;

const MovieItem = (props) => {
  const { id, title, image, subtitle, pubDate, actor, userRating } = props;
  const DEFAULT_IMAGE = 'https://via.placeholder.com/130x185';
  const poster = image === '' ? DEFAULT_IMAGE : image;

  return (
    <MovieItemBlock>
      <a href={id} target="_blank" rel="noopener noreferrer">
        <div className="item_poster">
          <img src={poster} alt={title} />
        </div>
        <div className="item_desc">
          <h3 className="movie_title">
            {title.replace(/<b>/gi, '').replace(/<\/b>/gi, '')}
          </h3>
          <p className="movie_subtitle">{subtitle.replace('&amp;', '&')}</p>
          <p className="movie_rating">
            <span>평점</span> {userRating}
          </p>
          <p className="movie_data">
            <span>개봉</span> {pubDate}
          </p>
          <p className="movie_actor">
            <span>출연</span> {actor}
          </p>
        </div>
      </a>
    </MovieItemBlock>
  );
};

export default MovieItem;
