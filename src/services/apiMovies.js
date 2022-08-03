import axios from 'axios';

const API_KEY = '54136eee0ab00d3308810c06e8fc9be1';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export const getTrendingMovies = async () => {
  return await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
};

export const getMoviesByQuery = async query => {
  return await axios.get(
    `/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
};

export const getMovieDetails = async id => {
  return await axios.get(`/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
};

export const getMovieCredits = async id => {
  return await axios.get(
    `/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
};

export const getMovieReviews = async id => {
  return await axios.get(
    `/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
};
