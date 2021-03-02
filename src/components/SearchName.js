import React, { useContext } from "react";
import "../styles/SearchName.css";
import DataAreaContext from "../utils/DataAreaContext";

// create search form to filter by name
const SearchName = () => {
  const context = useContext(DataAreaContext);

  return (
    <div className="search-box">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search by Name"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}
        />
        <button className="btn my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
export default SearchName;
