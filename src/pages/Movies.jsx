import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import {
  Section,
  Container,
  Heading,
  SearchMovie,
  MoviesList,
} from 'components';
import { getMoviesByQuery } from '../services/apiMovies';

export const Movies = () => {
  const [moviesByQuery, setmoviesByQuery] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    setmoviesByQuery([]);

    const response = getMoviesByQuery(query);
    response
      .then(res => {
        const data = res.data.results;
        data.length
          ? setmoviesByQuery(data)
          : toast.error('Bad request. Try again!');
      })
      .catch(error => {
        console.log(error.message);
        setError(true);
      });
  }, [query]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <Section>
        {error && <div>Something went wrong</div>}
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
