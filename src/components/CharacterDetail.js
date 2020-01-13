import React from "react";
import { Link } from "react-router-dom";
import "../sylesheets/characterDetail.scss";
function CharacterDetail(props) {
  const { image, name, species, status, location, episode } = props.character;

  return (
    <>
      <div>
        <Link to="/">
          <button className="fas fa-times-circle btn"></button>
        </Link>
      </div>
      <div className="cardDetail">
        <img className="cardDetail__img" src={image} alt={name} />
        <h3 className="cardDetail__title">{name}</h3>

        <p className="cardDetail__description">Planet: {location.name}</p>
        <p className="cardDetail__description"> Episodes: {episode.length}</p>
        <div className="icon">
          {status === "Alive" ? (
            <p className="cardDetail__description">Status: {status}</p>
          ) : (
            <i className="fas fa-skull-crossbones death"></i>
          )}
        </div>

        <div>
          {species === "Alien" ? (
            <i className="fab fa-reddit-alien alien"></i>
          ) : (
            <i className="fas fa-user-alt human"></i>
          )}
        </div>
      </div>
    </>
  );
}

export default CharacterDetail;
