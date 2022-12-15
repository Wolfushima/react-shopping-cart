import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ searchResult }) => (
  <ul className="search__results">
    {searchResult.map((film) => (
      <Link to={`/films/${film.title.replace(/\s/g, '')}`} key={film.id}>
        <li className="search__film">
          <div className="search__film-img">
            <img src={film.image} alt={film.title} />
          </div>
          <div className="search__film-description">
            <div>
              <h3>{film.title}</h3>
              <p>{film.director}</p>
            </div>
          </div>
        </li>
      </Link>
    ))}
  </ul>
);

export default SearchResult;
