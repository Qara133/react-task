import React, { useState } from "react";

function Search({ getData }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder=""
      />
      <button onClick={() => getData(searchValue)}>Search</button>
    </div>
  );
}

export default Search;
