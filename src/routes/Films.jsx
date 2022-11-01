import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Films() {
  const { film } = useLoaderData();
  return (
    <div id="film">
      <div>
        <img
          key={film.image}
          src={film.image || null}
          alt={film.title}
        />
      </div>
      <div>
        <h1>{film.title}</h1>
      </div>
    </div>
  );
}
