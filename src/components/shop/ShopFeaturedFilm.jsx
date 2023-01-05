import React from 'react';
import { Link } from 'react-router-dom';

const ShopFeaturedFilm = ({ featuredFilm }) => (
  <div id="shop-featured-film" className="shop-featured-film">
    <div className="shop-featured-film__container">
      <div className="shop-featured-film__img-container">
        <img
          className="shop-featured-film__img"
          alt={featuredFilm.title}
          src={featuredFilm.movie_banner}
        />
      </div>
      <div className="shop-featured-film__film">
        <h2 className="shop-featured-film__title">
          FEATURED FILM
        </h2>
        <div className="shop-featured-film__info">
          <p className="shop-featured-film-film-title">
            {featuredFilm.title}
          </p>
          <p className="shop-featured-film__description">
            {featuredFilm.description}
          </p>
        </div>
        <Link
          to={`/films/${featuredFilm.title.replace(/\s/g, '')}`}
          className="shop-featured-film__button"
        >
          BUY NOW
        </Link>
      </div>
    </div>
  </div>
);

export default ShopFeaturedFilm;
