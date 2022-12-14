import React from 'react';
import { Link } from 'react-router-dom';

const SearchBarResult = ({ searchResult, handleClick }) => (
  <div className="search-bar__result">
    {
        searchResult.map((r) => (
          <Link
            to={`/films/${r.title.replace(/\s/g, '')}`}
            key={r.id}
            onClick={handleClick}
          >
            <p>
              {r.title}
              {' '}
              <span>{r.release_date}</span>
              ,
              <span>
                {' '}
                {r.director}
              </span>
            </p>
          </Link>
        ))
    }
  </div>

);

export default SearchBarResult;
