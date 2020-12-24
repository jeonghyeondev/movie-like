const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const axios = require('axios');

const ID_KEY = 'tTK3P0kQ0Hg7Bo_QleLw';
const SECRET_KEY = 'IEOluexD8z';

app.use(cors());

app.use(bodyParser.json());

app.use('/', (req, res) => {
  const word = req.query.query;
  axios
    .get('https://openapi.naver.com/v1/search/movie.json', {
      params: {
        query: word,
        display: 20,
      },
      headers: {
        'X-Naver-Client-Id': ID_KEY,
        'X-Naver-Client-Secret': SECRET_KEY,
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then(function (response) {
      console.log(response.data.items);
      const items = response.data.items;
      res.send({ items: items });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
