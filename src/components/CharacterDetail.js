import React from "react";
import { Link } from "react-router-dom";
function CharacterDetail(props) {
  const { image, name, species, status, location, episode } = props.character;

  return (
    <>
      <div>
        <Link to="/">
          <button className="fas fa-times-circle form__btn"></button>
        </Link>
      </div>
      <div className="card">
        <img className="card__img" src={image} alt={name} />
        <h3 className="card__title">{name}</h3>

        <p className="card__description">{location.name}</p>
        <p className="card__description">{episode.length}</p>
        <div>
          {status === "Alive" ? (
            <p>Status: {status}</p>
          ) : (
            <i className="fas fa-skull-crossbones"></i>
          )}
        </div>

        <div>
          {species === "Alien" ? (
            <i className="fab fa-reddit-alien"></i>
          ) : (
            <i className="fas fa-user-alt"></i>
          )}
        </div>
      </div>
    </>
  );
}

export default CharacterDetail;
