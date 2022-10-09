import React from "react";

function Search( { findPoke, setFindPoke } ) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={findPoke} onChange={(e) => setFindPoke(e.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
