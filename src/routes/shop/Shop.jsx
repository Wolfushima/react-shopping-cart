import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShopHeader from '../../components/shop/ShopHeader';
import ShopTopRatedFilms from '../../components/shop/ShopTopRatedFilms';
import ShopFeaturedFilm from '../../components/shop/ShopFeaturedFilm';

const findFilm = (films, filmTitle) => films.find((film) => film.title === filmTitle);
const findTopRatedfilms = (films, n) => (
  films
    .slice()
    .sort((a, b) => b.rt_score - a.rt_score)
    .slice(0, n)
);

const Shop = () => {
  const { films } = useLoaderData();

  if (!films) return (<p>No films found</p>);

  const featuredFilm = findFilm(films, 'Spirited Away');
  const topRatedfilms = findTopRatedfilms(films, 10);

  return (
    <>
      <ShopHeader>
        <ShopFeaturedFilm featuredFilm={featuredFilm} />
      </ShopHeader>
      <ShopTopRatedFilms topRatedFilms={topRatedfilms} />
    </>
  );
};

export default Shop;
