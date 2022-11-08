import React from 'react';
import FilmProductLeft from './FilmProductLeft';
import FilmProductRight from './FilmProductRight';

const FilmProduct = ({ film }) => (
  <div id="film" className="film-product">
    <div className="film-product__container">
      <FilmProductLeft film={film} />
      <FilmProductRight film={film} />
    </div>
  </div>
);

export default FilmProduct;
