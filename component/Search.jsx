import React, { useState } from "react";
import "./Search.css";

function Search({ name, onSearch }) {
  const [query, setQuery] = useState("");

  function handleInputChange(event) {
    const inputValue = event.target.value;
    setQuery(inputValue);
    onSearch(inputValue);
    console.log("Search Query:", query);
  }

  return (
    <>
      <div className="main-container">
        {name !== "" ? (
          <div className="greet-bar">
            <p className="greet-info">Hi, {name}</p>
          </div>
        ) : null}

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search tasks..."
            value={query}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
}

export default Search;
