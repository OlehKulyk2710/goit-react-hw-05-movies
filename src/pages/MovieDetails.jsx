import { useParams, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  return (
    <>
      <div>MovieDetails, ID: {movieId}</div>
      <Outlet />
    </>
  );
};
