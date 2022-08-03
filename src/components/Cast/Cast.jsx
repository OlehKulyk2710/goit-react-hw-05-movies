import { Container, Heading } from 'components';
import { useParams } from 'react-router-dom';
import {
  ActorName,
  ActorPhoto,
  CastItem,
  CastList,
  Character,
} from './Cast.styled';

import { useFetchMovieCredits } from 'hooks';

export const Cast = () => {
  const { movieId } = useParams();
  const { movieCredits, isCastData } = useFetchMovieCredits(movieId);

  const shortedMovieCredits = movieCredits.splice(0, 10);

  return (
    <Container>
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
