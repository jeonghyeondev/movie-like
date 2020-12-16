import React from 'react';
import styled from 'styled-components';

const MovieItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  flex-basis: 305px;
  height: 170px;
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
  const {
    id,
    title,
    link,
    image,
    subtitle,
    pubDate,
    actor,
    userRating,
  } = props;
  return (
    <MovieItemBlock>
      <div className="item_area" id={id}>
        <div className="item_data">
          <p>
            <a href={link}>{title}</a>
          </p>
          <div>
            <span>{subtitle}</span>
          </div>
          <div>
            개봉 {pubDate} {userRating}
          </div>
          <div>출연 {actor}</div>
        </div>
        <div className="item_photo"></div>
        <img src={image} alt={title} />
      </div>
    </MovieItemBlock>
  );
};

export default MovieItem;
