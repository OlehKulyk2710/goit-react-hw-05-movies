import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Heading } from 'components';
import { ReviewsList, ReviewsItem, Author, Content } from './Reviews.styled';
import { getMovieReviews } from 'services/apiMovies';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isMovieReviews, setIsMovieReviews] = useState(true);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const response = getMovieReviews(movieId);
    response
      .then(res => {
        const data = res.data.results;
        data.length ? setMovieReviews(data) : setIsMovieReviews(false);
      })
      .catch(error => {
        console.log(error.message);
        setError(true);
      });
  }, [movieId]);
  return (
    <Container>
      {error && <div>Something went wrong</div>}
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
