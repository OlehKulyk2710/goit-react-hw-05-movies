import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/apiMovies';
import toast from 'react-hot-toast';

export const useFetchTrendingMovies = () => {
  const [trendingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    const response = getTrendingMovies();
    response
      .then(res => setTrandingMovies(res.data.results))
      .catch(error => {
        console.log(error.message);
        toast.error("Something went wrong. Can't download a movie list!");
      });
  }, []);

  return { trendingMovies };
};
