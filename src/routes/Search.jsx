import React, { useEffect, useState } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import fetchFilms from '../utils/fetchFilms';
import SearchResult from '../components/search/SearchResult';

const Search = () => {
  const { searchTerm } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setFilms] = useState();
  const [searchResult, setSearchResult] = useState(null);
  const [searchValue, setSearchValue] = useState(searchTerm);
  const [isSearching, setIsSearching] = useState(false);

  const updateSearchResult = (data, value) => {
    const regExp = /[a-zA-Z]/g;
    if (!regExp.test(value)) {
      setSearchResult(() => null);
    } else {
      setIsSearching(() => true);
      const result = data.filter((film) => (
        film.title.toLowerCase().replace(/\s|'/g, '').includes(value.toLowerCase().replace(/\s|'/g, ''))
      ));
      setTimeout(() => {
        setIsSearching(() => false);
        if (result.length > 0) {
          setSearchResult(() => result);
          return;
        } setSearchResult(() => null);
      }, 1000);
    }
  };

  const handleChange = (e) => {
    setSearchValue(() => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!films) { return; }
    updateSearchResult(films, searchValue);
    setSearchParams(`q=${searchValue}`);
  };

  useEffect(() => {
    const filmsLoader = async () => {
      const filmsData = await fetchFilms();
      if (filmsData) {
        setFilms(filmsData);
        updateSearchResult(filmsData, searchTerm);
      } else setFilms(null);
    };
    filmsLoader().catch(console.error);
  }, []);

  useEffect(() => {
    if (!films) { return; }
    setSearchValue(searchTerm);
    updateSearchResult(films, searchTerm);
  }, [searchTerm]);

  return (
    <div id="search" className="search">
      <div className="search__wrapper">
        <div className="search__container">
          <div className="search__content">
            <h3>SEARCH</h3>
            <form
              action="/search"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="search__search-icon">
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
                autoComplete="off"
              />
              <input type="submit" value="&#xf101;" />
            </form>
            {
              searchResult
                ? (
                  <SearchResult
                    searchResult={searchResult}
                  />
                )
                : <p className="search__noresults">No Results Found</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
