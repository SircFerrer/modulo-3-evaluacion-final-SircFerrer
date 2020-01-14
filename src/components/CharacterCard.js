import React from "react";
import { Link } from "react-router-dom";
import "../sylesheets/characterCard.scss";

function CharacterCard(props) {
  const { image, name, species, id } = props.character;
  const routeID = `/character/${id}`;

  return (
    <div className="card">
      <Link className="link" to={routeID}>
        <img className="card__img" src={image} alt={name} />
        <h3 className="card__title">{name}</h3>

        <p className="card__description">
          {species === "Alien" ? (
            <i className="fab fa-reddit-alien alien"></i>
          ) : (
              <i className="fas fa-user-alt human"></i>
            )}
        </p>
        <i className="fas fa-info-circle info"></i>
      </Link>
    </div>
  );
}

export default CharacterCard;
