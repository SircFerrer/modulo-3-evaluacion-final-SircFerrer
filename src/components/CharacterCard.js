import React from "react";
import { Link } from "react-router-dom";

function CharacterCard(props) {
  const { image, name, species, id } = props.character;
  const routeID = `/character/${id}`;

  return (
    <div className="card">
      <Link to={routeID}>
        <img className="card__img" src={image} alt={name} />
        <h3 className="card__title">{name}</h3>
        <p className="card__description">{species}</p>
      </Link>
    </div>
  );
}

export default CharacterCard;
