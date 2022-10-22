import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Home from './routes/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
