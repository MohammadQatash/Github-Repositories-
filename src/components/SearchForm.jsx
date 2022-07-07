import React, {useState} from "react";
import { SearchIcon } from '../icons';

const SearchForm = ({handleSubmit}) => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <form
      className="form"
      onSubmit={(e) => handleSubmit(e, searchValue, setSearchValue)}
    >
      <div className="form-control">
        <label htmlFor="search" className="search-icon">
          <SearchIcon />
        </label>
        <input
          type="text"
          name="name"
          id="search"
          className="search-input"
          placeholder="Search for a reporsitories"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchForm;
