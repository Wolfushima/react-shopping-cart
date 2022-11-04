import React from 'react';
import { Link } from 'react-router-dom';

const BasicFilm = ({ film }) => (
  <li className="basic-film-li">
    <Link to={`/films/${film.title.replace(/\s/g, '')}`}>
      <figure className="basic-film">
        <img src={film.image} alt={film.title} className="film-img" />
        <figcaption>
          <dl>
            <dt>{`Released ${film.release_date}`}</dt>
            <dt>{film.title}</dt>
            <dd>{film.director}</dd>
          </dl>
        </figcaption>
      </figure>
    </Link>
  </li>
);

const TopRatedFilms = ({ topRatedFilms }) => (
  <section id="top-rated-films" className="top-rated-films">
    <div className="top-rated-films__container">
      <header className="top-rated-films__header">
        TOP RATED FILMS
      </header>
      <div className="top-rated-films__films">
        <ul>
          {
          topRatedFilms.map((film) => (<BasicFilm film={film} key={film.id} />))
          }
        </ul>
      </div>
    </div>
  </section>
);

export default TopRatedFilms;
