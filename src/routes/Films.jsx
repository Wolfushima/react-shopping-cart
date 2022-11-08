import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FilmProduct from '../components/films/FilmProduct/FilmProduct';

export default function Films() {
  const { film } = useLoaderData();
  return (
    <FilmProduct film={film} />
  );
}
