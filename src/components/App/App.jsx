import { TrendingMovies } from 'components';
import { Routes, Route } from 'react-router-dom';
import { Home, Movies, MovieSearch, MovieDetails } from '../../pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<TrendingMovies />}></Route>
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          {/* <Route path="cast" element={<Cast />} /> */}
          {/* <Route path="review" element={<Reviews />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};
