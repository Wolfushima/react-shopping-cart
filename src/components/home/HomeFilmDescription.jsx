import React from 'react';
import { Link } from 'react-router-dom';

const HomeFilmDescription = ({ film }) => (
  <div className="home-film-description homefilm">
    <div className="homefilm__wrapper">
      <div className="homefilm__container">
        <p>
          A
          {' '}
          <i>film</i>
          {' '}
          by
          {' '}
          <span>{film.director}</span>
        </p>
        <h2>{film.title}</h2>
        <Link
          to={`/films/${film.title.replace(/\s/g, '')}`}
          className="homefilm__buybutton"
        >
          BUY NOW
        </Link>
      </div>
    </div>
  </div>
);

export default HomeFilmDescription;
