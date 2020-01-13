import React from "react";
import { Link } from "react-router-dom";
function CharacterDetail(props) {
  const { image, name, species, status } = props.character;
  console.log(status);

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
        <p className="card__description">Status: {status}</p>
        <p className="card__description">Species: {species}</p>

<<<<<<< HEAD
        <p className="card__description">
          Origin: {props.character.location.name}
        </p>
        <p className="card__description">
          Episodes: {props.character.episode.length}
        </p>
=======
        <p className="card__description">{props.character.location.name}</p>
        <p className="card__description">{props.character.episode.length}</p>
        <div>
          {status === "Alive" ? (
            <p>{status}</p>
          ) : (
            <i className="fas fa-skull-crossbones"></i>
          )}
        </div>
>>>>>>> dev
      </div>
    </>
  );
}

export default CharacterDetail;
