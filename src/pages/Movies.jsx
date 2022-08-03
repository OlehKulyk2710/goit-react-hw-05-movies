import { useSearchParams } from 'react-router-dom';
import { useFetchMoviesByQuery } from 'hooks';

import {
  Section,
  Container,
  Heading,
  SearchMovie,
  MoviesList,
} from 'components';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { moviesByQuery } = useFetchMoviesByQuery(query);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <Section>
        <Container>
          <Heading>Search a movie</Heading>
          <SearchMovie onSubmit={handleSubmit} />
        </Container>
      </Section>
      {!!moviesByQuery.length && (
        <Section>
          <Container>
            <MoviesList data={moviesByQuery} />
          </Container>
        </Section>
      )}
    </>
  );
};
