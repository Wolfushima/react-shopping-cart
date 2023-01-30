import React, { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
import SearchBarResult from './SearchBarResult';
import fetchFilms from '../../utils/fetchFilms';

const SearchBar = ({ className, isSearchBarExpanded, handleClickSearch }) => {
  const [films, setFilms] = useState();
  const [searchResult, setSearchResult] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleChange = (e) => {
    setSearchValue(() => e.target.value);
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
      setIsSearching(() => true);
      const result = films.filter((film) => (
        film.title.toLowerCase().replace(/\s|'/g, '').includes(searchValue.toLowerCase().replace(/\s|'/g, ''))
      ));
      setTimeout(() => {
        setIsSearching(() => false);
        if (result.length > 0) {
          setSearchResult(() => result);
          return;
        } setSearchResult(() => null);
      }, 1000);
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
        <Form
          action="/search"
          method="get"
          onSubmit={handleClickSearch}
        >
          <div className="search-bar__search-icon">
            {
              isSearching
                ? <i className="fa fa-refresh fa-spin" />
                : <i className="fa fa-search" />
            }
          </div>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => handleChange(e)}
            value={searchValue}
            name="q"
            autoComplete="off"
          />
          <input
            type="submit"
            value="&#xf101;"
          />
        </Form>
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
