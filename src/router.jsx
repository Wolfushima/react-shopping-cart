import React from 'react';
import { createHashRouter } from 'react-router-dom';
import filmsLoader from './utils/filmsLoader';
import filmLoader from './utils/filmLoader';
import ErrorPage from './error-page';
import Root from './routes/root';
import Home from './routes/Home';
import Shop from './routes/shop/Shop';
import Films from './routes/Films';
import Cart from './routes/shop/Cart';
import CheckOut from './routes/shop/CheckOut';
import Browse from './routes/shop/Browse';
import Contact from './routes/Contact';
import About from './routes/About';
import Search from './routes/Search';
import Confirmation from './routes/shop/Confirmation';

const router = createHashRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: filmsLoader,
        },
        {
          path: '/shop',
          element: <Shop />,
          loader: filmsLoader,
        },
        {
          path: '/shop/cart',
          element: <Cart />,
        },
        {
          path: '/shop/checkout',
          element: <CheckOut />,
        },
        {
          path: 'films/:filmId',
          element: <Films />,
          loader: filmLoader,
        },
        {
          path: '/browse',
          element: <Browse />,
          loader: filmsLoader,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/search',
          element: <Search />,
          loader: async ({ request }) => {
            const url = new URL(request.url);
            const searchTerm = url.searchParams.get('q');
            return { searchTerm };
          },
        },
        {
          path: '/shop/confirmation',
          element: <Confirmation />,
        },
      ],
    },
  ],
);

export default router;
