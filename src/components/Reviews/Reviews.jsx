import { useParams } from 'react-router-dom';
import { Container, Heading } from 'components';
import { ReviewsList, ReviewsItem, Author, Content } from './Reviews.styled';

import { useFetchMovieReviews } from 'hooks';

export const Reviews = () => {
  const { movieId } = useParams();
  const { movieReviews, isMovieReviews } = useFetchMovieReviews(movieId);

  return (
    <Container>
      {!isMovieReviews && <p>There is no information!!!</p>}
      {!!movieReviews.length && (
        <>
          <Heading>Reviews</Heading>
          <ReviewsList>
            {movieReviews.map(({ id, author, content }) => (
              <ReviewsItem key={id}>
                <Author>Author: {author}</Author>
                <Content>{content}</Content>
              </ReviewsItem>
            ))}
          </ReviewsList>
        </>
      )}
    </Container>
  );
};
