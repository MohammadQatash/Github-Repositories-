import React, { useEffect, useRef, useState } from "react";
import { SearchIcon } from '../icons';

const SearchForm = ({ handleSubmit }) => {
  const [searchValue, setSearchValue] = useState("");
  const refInput = useRef(null);

  useEffect(() => {
    refInput.current.focus();
  }, [])

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
          ref={refInput}
        />
      </div>
    </form>
  );
};

export default SearchForm;
