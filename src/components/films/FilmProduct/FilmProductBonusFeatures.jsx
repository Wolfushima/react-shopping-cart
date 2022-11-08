import React from 'react';

const FilmProductBonusFeatures = ({ film }) => (
  <div className="film-product__bonus-features">
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
);

export default FilmProductBonusFeatures;
