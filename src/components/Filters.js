import React from 'react';
function Filters() {
    return (
      <div>
       <label htmlFor="search" className="form__label">
        Busca a tu personaje
      </label>
      <input  id="search " type="text" className="form__input-text" placeholder="Búsqueda por nombre" />
      </div>
    );
  }
  
  export default Filters;