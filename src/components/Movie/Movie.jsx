import {
  MovieContainer,
  Poster,
  DetailsList,
  DetailItem,
  Title,
  Description,
} from './Movie.styled';
import PropTypes from 'prop-types';
import defaultPoster from '../../images/images.png';

export const Movie = ({ data }) => {
  const { title, overview, genres, poster_path, vote_average } = data;
  if (!title) return;
  const userScore = Math.floor(vote_average * 10);

  const genresList = genres
    .reduce((prev, item) => (prev = [...prev, item.name]), [])
    .join(', ');

  return (
    <MovieContainer>
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

Movie.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};
