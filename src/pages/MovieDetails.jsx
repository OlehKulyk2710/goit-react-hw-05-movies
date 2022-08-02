import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import {
  Heading,
  Section,
  Container,
  Movie,
  CastReviewLinks,
} from 'components';
import { getMovieDetails } from 'services/apiMovies';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const response = getMovieDetails(movieId);
    response
      .then(res => setMovieDetails(res.data))
      .catch(error => {
        console.log(error.message);
        setError(true);
      });
  }, [movieId]);

  return (
    <>
      <Section>
        <Container>
          <Heading>Movie details by ID: {movieId}</Heading>

          {error && <div>Something went wrong</div>}
          <Movie data={movieDetails} />
        </Container>
      </Section>
      <Section>
        <Container>
          <CastReviewLinks />
        </Container>
      </Section>
      <Section>
        <Container>
          <Outlet />
        </Container>
      </Section>
    </>
  );
};
