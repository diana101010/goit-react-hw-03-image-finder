import React, { useState } from 'react';
import style from './SearchBar.module.css';

const Searchbar = ({ onSubmit, apiUrl, apiKey }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery, apiUrl, apiKey);
    setSearchQuery('');
  };

  return (
    <header className="searchbar">
      <form className={style.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={style.searchFormbutton}>
          <span className="button-label">Search</span>
        </button>

        <input
          className={style.searchForminput}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
