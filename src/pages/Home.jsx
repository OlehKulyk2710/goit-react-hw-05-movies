import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/apiMovies';
import { Section, Container, Heading, MoviesList } from 'components';

export const Home = () => {
  const [trendingMovies, setTrandingMovies] = useState([]);
  const [error, setError] = useState(false);

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
    <Section>
      <Container>
        <Heading>Trending Movies</Heading>
        {error && <div>Something went wrong</div>}
        <MoviesList data={trendingMovies} />
      </Container>
    </Section>
  );
};
