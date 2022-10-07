import React, { useState } from "react";

function Search({ searchMovies }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <nav>
        <form>
          <div className="search-button">
            <input
              type="text"
              placeholder="Enter Movie Name"
              className="inputText"
              onChange={handleChange}
              value={search}
              onKeyPress={searchMovies}></input>
            <button>Search</button>
          </div>
        </form>
      </nav>
    </div>
  );
}

export default Search;
