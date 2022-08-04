import { Link, useLocation } from 'react-router-dom';
import { Movies, Movie } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ data }) => {
  const location = useLocation();
  return (
    <Movies>
      {data.map(({ id, title }) => (
        <Movie key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </Movie>
      ))}
    </Movies>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ),
};
