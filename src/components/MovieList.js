import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';
import MovieSearch from './MovieSearch';
import MovieItem from './MovieItem';
// import { movieApi } from '../api';
import axios from 'axios';

const MovieListBlock = styled.div`
  .movies_area {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .total_area {
    padding: 50px 0 20px;
    text-align: center;
    color: #b3b3b3;
    font-size: 16px;
    span {
      color: #fff;
    }
  }
  .noData {
    font-size: 30px;
    color: #c0a789;
    text-align: center;
    margin-top: 100px;
  }
`;

const override = css`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [movieDatas, setMovieDatas] = useState('');
  const [searchMovie, setSearchMovie] = useState('');
  const [loading, setLoading] = useState(false);

  const search = async (searchValue) => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/', {
        params: { query: searchValue, display: 20 },
      });
      setMovies(response.data.items);
      setMovieDatas(response.data);
      setSearchMovie(searchValue);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  if (loading) {
    return <BeatLoader size={30} color={'#c0a789'} loading css={override} />;
  }

  if (!movies) {
    return;
  }
  return (
    <MovieListBlock>
      <MovieSearch search={search} />

      {!searchMovie ? (
        <p className="noData">영화 검색을 해보세요 🤗🤗🤗</p>
      ) : (
        <div>
          {movies.length > 0 ? (
            <div className="total_area">
              <p>
                <span>{searchMovie}</span> 검색 결과 입니다. Total{' '}
                <span>{movieDatas.total}</span>개 입니다.
              </p>
            </div>
          ) : (
            <div className="total_area">
              <p>검색결과가 없습니다.</p>
            </div>
          )}
        </div>
      )}

      <div className="movies_area">
        {movies.map((movie) => (
          <MovieItem
            key={movie.link}
            id={movie.link}
            title={movie.title}
            link={movie.link}
            image={movie.image}
            subtitle={movie.subtitle}
            pubDate={movie.pubDate}
            actor={movie.actor}
            userRating={movie.userRating}
          />
        ))}
      </div>
    </MovieListBlock>
  );
};

export default MovieList;
