import React from 'react';
import FilmProductLeft from './FilmProductLeft';
import FilmProductRight from './FilmProductRight';

const FilmProduct = ({ film }) => (
  <div id="film" className="film-product">
    <div className="film-product__container">
      <FilmProductLeft film={film} />
      <FilmProductRight film={film} />
    </div>
    <div className="bonus-features">
      <p>BONUS FEATURES</p>
      <ul>
        <li>Exclusive Booklet</li>
        <li>Feature-Length Storyboards</li>
        <li>Behind The Story</li>
        <li>
          Creating
          {' '}
          {film.title}
        </li>
        <li>Creating The Characters</li>
        <li>
          The
          {' '}
          {film.title}
          {' '}
          Experience
        </li>
        <li>Producer&apos;s Perspective: Creating Ghibli</li>
        <li>
          The Locations Of
          {' '}
          {film.title}
        </li>
        <li>Textless Credits</li>
        <li>Original Theatrical Trailers</li>
      </ul>

    </div>
  </div>
);

export default FilmProduct;
