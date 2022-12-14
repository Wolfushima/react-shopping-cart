import React, { useEffect, useState } from 'react';
import SearchBarResult from './SearchBarResult';
import fetchFilms from '../../utils/fetchFilms';

const SearchBar = ({ className, isSearchBarExpanded, handleClickSearch }) => {
  const [films, setFilms] = useState();
  const [searchResult, setSearchResult] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(() => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClickLink = () => {
    handleClickSearch();
  };

  useEffect(() => {
    const regExp = /[a-zA-Z]/g;
    if (!films) { return; }
    if (!regExp.test(searchValue)) {
      setSearchResult(() => null);
    } else {
      const result = films.filter((film) => (
        film.title.toLowerCase().replace(/\s|'/g, '').includes(searchValue.toLowerCase().replace(/\s|'/g, ''))
      ));
      if (result.length > 0) {
        setSearchResult(() => result);
        return;
      } setSearchResult(() => null);
    }
  }, [searchValue]);

  useEffect(() => {
    if (isSearchBarExpanded) {
      document.querySelector('main').addEventListener('click', handleClickSearch);
      document.querySelector('.root-footer').addEventListener('click', handleClickSearch);
      setSearchValue('');
    }
    return () => {
      document.querySelector('main').removeEventListener('click', handleClickSearch);
      document.querySelector('.root-footer').removeEventListener('click', handleClickSearch);
    };
  }, [isSearchBarExpanded]);

  useEffect(() => {
    const filmsLoader = async () => {
      const filmsData = await fetchFilms();
      if (filmsData) {
        setFilms(filmsData);
      } else setFilms(null);
    };
    filmsLoader().catch(console.error);
  }, []);

  return (
    <div className={className}>
      <div className="search-bar__container">
        <h3>SEARCH</h3>
        <form
          action=""
          onSubmit={(e) => handleSubmit(e)}
        >
          <i className="fa fa-search" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => handleChange(e)}
            value={searchValue}
          />
          <input type="submit" value="&#xf101;" />
        </form>
        {
          searchResult
            ? (
              <SearchBarResult
                searchResult={searchResult}
                handleClick={handleClickLink}
              />
            )
            : null
        }
      </div>
    </div>
  );
};

export default SearchBar;
