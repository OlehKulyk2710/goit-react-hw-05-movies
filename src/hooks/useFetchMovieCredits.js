import { useEffect, useState } from 'react';
import { getMovieCredits } from 'services/apiMovies';
import toast from 'react-hot-toast';

export const useFetchMovieCredits = movieId => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [isCastData, setIsCastData] = useState(true);

  useEffect(() => {
    if (!movieId) return;

    const response = getMovieCredits(movieId);
    response
      .then(res => {
        const data = res.data.cast;
        data.length ? setMovieCredits(data) : setIsCastData(false);
      })
      .catch(error => {
        console.log(error.message);
        toast.error("Something went wrong. Can't download a cast list!");
      });
  }, [movieId]);

  return { movieCredits, isCastData };
};
