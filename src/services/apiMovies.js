import axios from 'axios';

const API_KEY = '54136eee0ab00d3308810c06e8fc9be1';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export const getTrendingMovies = async () => {
  return await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
};

export const getMovieDetails = async id => {
  return await axios.get(`/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
};
