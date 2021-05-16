import axios from 'axios';

const api = axios.create({
  baseURL: 'https://firstplayerwinner.herokuapp.com/',
});

export default api;
