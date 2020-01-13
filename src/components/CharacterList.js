import React from 'react';
import CharacterCard from "./CharacterCard"


function CharacterList(props) {
  
  
    return (
      <ul className="cards">
      {props.characters.map(character => {
        return (
          <li className="cards" key={character.id}>
            <CharacterCard character={character} />
          </li>
        );
      })}
    </ul>
    );
  }
  
  export default CharacterList;