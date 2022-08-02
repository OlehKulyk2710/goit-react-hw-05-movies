import { Link } from 'react-router-dom';
import { LinksList, LinkItem } from './CastReviewLinks.styled';

export const CastReviewLinks = () => {
  return (
    <LinksList>
      <LinkItem>
        <Link to="/movies/:movieID/cast">Cast</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/movies/:movieID/review">Reviews</Link>
      </LinkItem>
    </LinksList>
  );
};
