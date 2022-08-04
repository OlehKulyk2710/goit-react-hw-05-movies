import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Cast, Reviews, NotFound } from 'components';

const Layout = lazy(() =>
  import('../../pages/Layout' /* webpackChunkName: "Layout" */)
);
const Home = lazy(() =>
  import('../../pages/Home' /* webpackChunkName: "Home" */)
);
const Movies = lazy(
  () => import('../../pages/Movies') /* webpackChunkName: "Movies" */
);
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails' /* webpackChunkName: "MovieDetails" */)
);

export const App = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
