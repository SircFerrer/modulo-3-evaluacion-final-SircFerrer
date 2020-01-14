import React from "react";
import "../sylesheets/filters.scss";
function Filters(props) {
  const handleSearch = ev => {
    props.handleSearch({ value: ev.target.value });
  };
  const handleCheck = ev => {
    props.handleCheck({ check: ev.target.value });

  };
  return (
    <>
      <div className="filters">
        <input
          onChange={handleSearch}
          id="search "
          type="text"
          className="searchInput"
          placeholder="Búsqueda por personaje"
          value={props.search}
        />
        <div className="checkbox">

          <input type="checkbox" checked={true} onChange={handleCheck} name="heart" /> <i className="fas fa-heart heart"></i>
          <input type="checkbox" checked={true} onChange={handleCheck} name="death" /> <i className="fas fa-skull-crossbones death2"></i>
          <input type="checkbox" checked={true} onChange={handleCheck} name="question" /> <i className="fas fa-question question2"></i>

        </div>

      </div>
    </>
  );
}

export default Filters;
