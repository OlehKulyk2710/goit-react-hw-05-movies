import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getMoviesByQuery } from '../services/apiMovies';

export const useFetchMoviesByQuery = query => {
  const [moviesByQuery, setmoviesByQuery] = useState([]);

  useEffect(() => {
    if (!query) return;
    setmoviesByQuery([]);

    const response = getMoviesByQuery(query);
    response
      .then(res => {
        const data = res.data.results;
        data.length
          ? setmoviesByQuery(data)
          : toast.error('Bad request. Try again!');
      })
      .catch(error => {
        console.log(error.message);
        toast.error("Something went wrong. Can't download a movie list!");
      });
  }, [query]);

  return { moviesByQuery };
};
