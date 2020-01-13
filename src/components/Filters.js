import React from "react";
import "../sylesheets/filters.scss";
function Filters(props) {
  const handleSearch = ev => {
    props.handleSearch({ value: ev.target.value });
  };
  return (
    <div>
      <input
        onChange={handleSearch}
        id="search "
        type="text"
        className="searchInput"
        placeholder="Búsqueda por personaje"
      />
    </div>
  );
}

export default Filters;
