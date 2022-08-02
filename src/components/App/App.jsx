import { Routes, Route } from 'react-router-dom';
import { Layout, Home, Movies, MovieDetails } from '../../pages';
import { Cast } from 'components';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          {/* <Route path="review" element={<Reviews />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};
