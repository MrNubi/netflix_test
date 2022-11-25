import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'b6432bbacb61cefe9eebc975f9c095df',
    language: 'ko-KR',
  },
});

export default instance;
