import React from "react";
import { SearchIcon } from '../icons'
const SearchForm = () => {
  return (
    <form className="form">
      <div className="form-control">
            <label htmlFor="search" className="search-icon">
                <SearchIcon />
            </label>
            <input type="text" name="name" id="search" className="search-input" placeholder="Search for a reporsitories"/>
        </div>
    </form>
  );
};

export default SearchForm;
