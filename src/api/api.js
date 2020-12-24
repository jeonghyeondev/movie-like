import axios from 'axios';

const ID_KEY = 'tTK3P0kQ0Hg7Bo_QleLw';
const SECRET_KEY = 'IEOluexD8z';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'X-Naver-Client-Id': ID_KEY,
    'X-Naver-Client-Secret': SECRET_KEY,
  },
});

export const movieApi = {
  searchValue: (word) =>
    api.get('/v1/search/movie.json', {
      params: {
        query: word,
        display: 20,
      },
    }),
};
