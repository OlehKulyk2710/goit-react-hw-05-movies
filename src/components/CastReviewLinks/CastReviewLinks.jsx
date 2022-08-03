import { Link, useParams } from 'react-router-dom';
import { LinksList, LinkItem } from './CastReviewLinks.styled';

export const CastReviewLinks = ({ goBackLink }) => {
  const { movieId } = useParams();

  return (
    <LinksList>
      <LinkItem>
        <Link to={`/movies/${movieId}/cast`} state={{ from: goBackLink }}>
          Cast
        </Link>
      </LinkItem>
      <LinkItem>
        <Link to={`/movies/${movieId}/reviews`} state={{ from: goBackLink }}>
          Reviews
        </Link>
      </LinkItem>
    </LinksList>
  );
};
