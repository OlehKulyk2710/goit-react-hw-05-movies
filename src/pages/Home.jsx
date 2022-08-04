import { Container, Heading, MoviesList, Section } from 'components';
import { useFetchTrendingMovies } from 'hooks';

const Home = () => {
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

export default Home;
