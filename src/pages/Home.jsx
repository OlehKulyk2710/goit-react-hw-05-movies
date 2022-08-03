import { Container, Heading, MoviesList, Section } from 'components';
import { useFetchTrendingMovies } from 'hooks';

export const Home = () => {
  const { trendingMovies } = useFetchTrendingMovies();

  return (
    <Section>
      <Container>
        <Heading>Trending Movies</Heading>
        <MoviesList data={trendingMovies} />
      </Container>
    </Section>
  );
};
