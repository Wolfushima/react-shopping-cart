import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const Browse = () => {
  const { films } = useLoaderData();
  return (
    <div id="browse" className="browse">
      <div className="browse__wrapper">
        <div className="browse__container">
          <header className="browse__topheader">
            <h1>SHOP ALL FILMS</h1>
            <p>Browse our entire collection.</p>
          </header>

          <ul className="browse__filmslist">
            {films.map((film) => (
              <Link to={`/films/${film.title.replace(/\s/g, '')}`} key={film.id}>
                <li className="browse__film">
                  <div className="browse__film-description">
                    <div>
                      <h2>{film.original_title}</h2>
                      <h3>{film.title}</h3>
                      <p>{film.director}</p>
                    </div>
                  </div>
                  <div className="browse__film-img">
                    <div>
                      <img src={film.movie_banner} alt={film.title} />
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Browse;
