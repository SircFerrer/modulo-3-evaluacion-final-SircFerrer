import React from "react";
import "../sylesheets/filters.scss";
function Filters(props) {
  const handleSearch = ev => {
    props.handleSearch({ value: ev.target.value });
  };
  const handleCheck = ev => {
    props.handleCheck({ value: ev.target.value });

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

          <input type="radio" onChange={handleCheck} name="status" value="Alive" checked={props.status === "Alive"} /> <i className="fas fa-heart heart" ></i>
          <input type="radio" onChange={handleCheck} name="status" value="Dead" checked={props.status === "Dead"} /> <i className="fas fa-skull-crossbones death2"></i>
          <input type="radio" onChange={handleCheck} name="status" value="unknown" checked={props.status === "unknown"} /> <i className="fas fa-question question2"></i>

        </div>

      </div>
    </>
  );
}

export default Filters;
