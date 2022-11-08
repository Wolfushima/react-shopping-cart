import React from 'react';

const FilmProductRight = ({ film }) => (
  <div className="film-product__right">
    <div className="film-product__description-container">
      <header>
        <p>{film.director}</p>
        <h1>{film.title}</h1>
      </header>
      <div className="film-product__description">
        {film.description}
      </div>
    </div>

    <div className="film-product__film-info">
      <p>FILM INFO</p>
      <br />
      <p>Original Title</p>
      <p>{film.original_title}</p>
      <p>Romanized Title</p>
      <p>{film.original_title_romanised}</p>
      <p>Produced by</p>
      <p>{film.producer}</p>
      <p>Released Date</p>
      <p>{film.release_date}</p>
      <p>Running Time</p>
      <p>
        {film.running_time}
        {' '}
        minutes
      </p>
      <p>Critics Score</p>
      <p>{film.rt_score}</p>
    </div>
  </div>

);

export default FilmProductRight;
