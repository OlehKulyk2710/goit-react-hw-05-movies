import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Heading } from 'components';
import {
  CastList,
  CastItem,
  Character,
  ActorPhoto,
  ActorName,
} from './Cast.styled';

import { getMovieCredits } from 'services/apiMovies';

export const Cast = () => {
  const [movieCredits, setMovieCredits] = useState([]);
  const [isCastData, setIsCastData] = useState(true);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

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
        setError(true);
      });
  }, [movieId]);

  const shortedMovieCredits = movieCredits.splice(0, 10);

  return (
    <Container>
      {error && <div>Something went wrong</div>}
      {!isCastData && <p>There is no information!!!</p>}

      {!!shortedMovieCredits.length && (
        <>
          <Heading>Cast (some of them)</Heading>
          <CastList>
            {shortedMovieCredits.map(
              ({ credit_id, name, character, profile_path }) => (
                <CastItem key={credit_id}>
                  <ActorPhoto
                    src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                    alt={name}
                  />
                  <ActorName>
                    <b>Actor:</b> {name}
                  </ActorName>
                  <Character>
                    <b>Character:</b> {character}
                  </Character>
                </CastItem>
              )
            )}
          </CastList>
        </>
      )}
    </Container>
  );
};
