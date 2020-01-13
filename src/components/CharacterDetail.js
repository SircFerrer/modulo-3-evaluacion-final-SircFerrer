import React from "react";
import { Link } from "react-router-dom";
function CharacterDetail(props) {
  console.log(props);
  const { image, name, species, status } = props.character;

  return (
    <>
      <div>
        <Link to="/">
          <button className="fas fa-times-circle form__btn"></button>
        </Link>
      </div>
      <div className="card">
        <img className="card__img" src={image} />
        <h3 className="card__title">{name}</h3>
        <p className="card__description">Status: {status}</p>
        <p className="card__description">Species: {species}</p>

        <p className="card__description">
          Origin: {props.character.location.name}
        </p>
        <p className="card__description">
          Episodes: {props.character.episode.length}
        </p>
      </div>
    </>
  );
}

export default CharacterDetail;
