import axios from 'axios';

export const rickandmortyApi = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});
