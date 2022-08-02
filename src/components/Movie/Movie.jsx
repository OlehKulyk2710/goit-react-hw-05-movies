import { useLocation, Link } from 'react-router-dom';
import {
  MovieContainer,
  Poster,
  DetailsList,
  DetailItem,
  Title,
  Description,
} from './Movie.styled';
import defaultPoster from '../../images/images.png';

export const Movie = ({ data }) => {
  const location = useLocation();

  const { title, overview, genres, poster_path, vote_average } = data;
  if (!title) return;
  const userScore = Math.floor(vote_average * 10);

  const genresList = genres
    .reduce((prev, item) => (prev = [...prev, item.name]), [])
    .join(', ');

  return (
    <MovieContainer>
      <Link to={location.state.from}>Back to</Link>
      <Poster
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defaultPoster
        }
        alt="poster"
      />
      <DetailsList>
        <DetailItem>
          <Title>{title}</Title>
          <Description>User score: {userScore}%</Description>
        </DetailItem>
        <DetailItem>
          <Title>Overview</Title>
          <Description>{overview}</Description>
        </DetailItem>
        <DetailItem>
          <Title>Genres</Title>
          <Description>{genresList}</Description>
        </DetailItem>
      </DetailsList>
    </MovieContainer>
  );
};
