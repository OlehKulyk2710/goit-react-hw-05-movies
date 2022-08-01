import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'services/apiMovies';
import { Heading, MoviesList, MovieItem } from './TrendingMovies.styled';

export const TrendingMovies = () => {
  const [trendingMovies, setTrandingMovies] = useState([]);
  const [error, setError] = useState(false);
  console.log(trendingMovies);

  useEffect(() => {
    const response = getTrendingMovies();
    response
      .then(res => setTrandingMovies(res.data.results))
      .catch(error => {
        console.log(error.message);
        setError(true);
      });
  }, []);

  return (
    <>
      <Heading>Trending Movies</Heading>
      {error && <div>Something went wrong</div>}

      <MoviesList>
        {trendingMovies.map(({ id, title }) => (
          <MovieItem key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </MovieItem>
        ))}
      </MoviesList>
    </>
  );
};
