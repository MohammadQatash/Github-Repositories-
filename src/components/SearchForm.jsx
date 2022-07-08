import React, { useEffect, useRef, useState } from "react";
import { SearchIcon, DownListIcon } from "../icons";
import List from "./List";

const SearchForm = ({ handleSubmit, reposeList, addToRepos }) => {
  const [searchValue, setSearchValue] = useState("");
  const refInput = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    refInput.current.focus();
  }, []);

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
        {reposeList.length > 0 ? (
          <List reposeList={reposeList} addToRepos={addToRepos} show={show} />
        ) : (
          ""
        )}
        {
          reposeList.length > 0 ?
          <div className="list-icon" onClick={() =>{setShow(!show);}}>
            <DownListIcon />
          </div> : ''
        }
      </div>
    </form>
  );
};

export default SearchForm;
