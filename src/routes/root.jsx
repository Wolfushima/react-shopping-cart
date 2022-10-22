import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <header>Title</header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
