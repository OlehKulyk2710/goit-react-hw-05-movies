import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import {
  Heading,
  Section,
  SectionOutlet,
  Container,
  Movie,
  CastReviewLinks,
  StyledLink,
} from 'components';
import { getMovieDetails } from 'services/apiMovies';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isMovieDetails, setIsMovieDetails] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

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
      });
  }, [movieId]);

  return (
    <>
      <Section>
        <Container>
          <Heading>Movie details by ID: {movieId}</Heading>
          <StyledLink to={goBackLink}>
            <HiArrowNarrowLeft style={{ marginRight: '5px' }} /> Go back
          </StyledLink>
          {error && <div>Something went wrong</div>}
          <Movie data={movieDetails} />
        </Container>
      </Section>
      {!!(!error & isMovieDetails) && (
        <>
          <Section>
            <Container>
              <Heading>Additional information</Heading>
              <CastReviewLinks goBackLink={goBackLink} />
            </Container>
          </Section>
          <SectionOutlet>
            <Outlet />
          </SectionOutlet>
        </>
      )}
    </>
  );
};
