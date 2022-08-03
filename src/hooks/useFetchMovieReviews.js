import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/apiMovies';
import toast from 'react-hot-toast';

export const useFetchMovieReviews = movieId => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isMovieReviews, setIsMovieReviews] = useState(true);

  useEffect(() => {
    if (!movieId) return;

    const response = getMovieReviews(movieId);
    response
      .then(res => {
        const data = res.data.results;
        data.length ? setMovieReviews(data) : setIsMovieReviews(false);
      })
      .catch(error => {
        console.log(error.message);
        toast.error("Something went wrong. Can't download the movie reviews!");
      });
  }, [movieId]);

  return { movieReviews, isMovieReviews };
};
