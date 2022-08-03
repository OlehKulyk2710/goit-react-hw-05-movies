import { Link, useLocation } from 'react-router-dom';

import { Movies, Movie } from './MoviesList.styled';

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
