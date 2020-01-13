import React from "react";
function Filters(props) {
  const handleSearch = ev => {
    props.handleSearch({ value: ev.target.value });
  };
  return (
    <div>
      <label htmlFor="search" className="form__label">
        Busca a tu personaje
      </label>
      <input
        onChange={handleSearch}
        id="search "
        type="text"
        className="form__input-text"
        placeholder="Búsqueda por nombre"
      />
    </div>
  );
}

export default Filters;
