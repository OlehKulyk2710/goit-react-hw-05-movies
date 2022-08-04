import { Outlet, useLocation } from 'react-router-dom';
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
import { useFetchMovieDetails } from 'hooks';

const MovieDetails = () => {
  const { movieDetails, isMovieDetails, error } = useFetchMovieDetails();
  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  return (
    <>
      <Section>
        <Container>
          <Heading>Movie details</Heading>
          <StyledLink to={goBackLink}>
            <HiArrowNarrowLeft style={{ marginRight: '5px' }} /> Go back
          </StyledLink>
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

export default MovieDetails;
