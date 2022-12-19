import HomePage from './pages/HomePage';

import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

import PageLayout from './components/PageLayout';
import NotFoundPage from './pages/NotFoundPage';
import { getNowPlaying, getUpcomming } from './utils/fetchingdata';
import ErrorBoundary from './components/ErrorBoundary';
import FavoritesPage from './pages/FavoritesPage';
import NowPlayingPage from './pages/NowPlayingPage';

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: '/',
        errorElement: <ErrorBoundary />,
        children: [
          {
            index: true,
            element: <HomePage />,
            loader: getUpcomming,
          },
          {
            path: '/upcomming/page/:movieId',
            element: <HomePage />,
            loader: ({ params }) => {
              return getUpcomming(params.movieId);
            },
          },
        ],
      },
      {
        path: '/now_playing',
        errorElement: <ErrorBoundary />,
        children: [
          {
            index: true,
            element: <NowPlayingPage />,
            loader: getNowPlaying,
          },
          {
            path: '/now_playing/page/:movieId',
            element: <NowPlayingPage />,
            loader: ({ params }) => {
              return getNowPlaying(params.movieId);
            },
          },
        ],
      },
      {
        path: '/favorite',
        element: <FavoritesPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
