import React, { useState } from 'react';
import style from './SearchBar.module.css';
// import { API_KEY, API_URL } from './API';
const API_URL =
  'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';
const API_KEY = '44928862-d2f2bbe0bebe323e8b9f048e4';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery, API_URL, API_KEY);
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
