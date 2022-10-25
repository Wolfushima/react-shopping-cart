import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './error-page';
import Root from './routes/root';
import Home from './routes/Home';
import Shop from './routes/shop/Shop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
    ],
  },
]);

export default router;
