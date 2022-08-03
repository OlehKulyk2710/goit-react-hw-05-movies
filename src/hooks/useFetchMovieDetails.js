import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/apiMovies';
import toast from 'react-hot-toast';

export const useFetchMovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isMovieDetails, setIsMovieDetails] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const response = getMovieDetails(movieId);
    response
      .then(res => {
        const data = res.data;
        setIsMovieDetails(true);
        setMovieDetails(data);
      })
      .catch(error => {
        console.log(error.message);
        setError(true);
        toast.error("Something went wrong. Can't download the movie details!");
      });
  }, [movieId]);

  return { movieDetails, isMovieDetails, error };
};
