import React, { useState } from 'react';
import styled from 'styled-components';
import MovieSearch from './MovieSearch';
import MovieItem from './MovieItem';
import axios from 'axios';

const MovieListBlock = styled.div`
  width: 600px;
  margin: 0 auto;
  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(null);

  const search = async (searchValue) => {
    const ID_KEY = ID_KEY;
    const SECRET_KEY = SECRET_KEY;
    setLoading(true);
    // setErrorMessage(null);
    try {
      const response = await axios.get('/v1/search/movie.json', {
        params: { query: searchValue, display: 20 },
        headers: {
          'X-Naver-Client-Id': ID_KEY,
          'X-Naver-Client-Secret': SECRET_KEY,
        },
      });
      setMovies(response.data.items);
      console.log(response.data.items);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  if (loading) {
    return <MovieListBlock>대기 중... </MovieListBlock>;
  }

  if (!movies) {
    return <div>ㅎㅎ</div>;
  }
  return (
    <MovieListBlock>
      <MovieSearch search={search} />
      {loading ? (
        <div>로딩중입니다...</div>
      ) : (
        <div className="movies">
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
      )}
    </MovieListBlock>
  );
};

export default MovieList;
