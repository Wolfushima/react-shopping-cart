import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShopHeader from '../../components/shop/ShopHeader';
import ShopFeaturedFilm from '../../components/shop/ShopFeaturedFilm';

const Shop = () => {
  const { films } = useLoaderData();
  const findFilm = (filmTitle) => films.find((film) => film.title === filmTitle);
  const featuredFilm = findFilm('Grave of the Fireflies');

  return (
    <>
      <ShopHeader />
      <ShopFeaturedFilm featuredFilm={featuredFilm} />
    </>
  );
};

export default Shop;
