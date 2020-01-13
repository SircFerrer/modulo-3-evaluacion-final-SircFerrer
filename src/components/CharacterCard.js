import React from 'react';
function CharacterCard(props) {
  console.log(props);
  const {image, name, species}=props.character
  
    return (
      <div className="card">
        <img className="card__img" src={image}/>
        <h3>{name}</h3>
        <p>{species}</p>
      </div>
    );
  }
  
  export default CharacterCard;