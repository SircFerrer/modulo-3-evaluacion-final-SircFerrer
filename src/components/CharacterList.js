import React from "react";
import CharacterCard from "./CharacterCard";
import "../sylesheets/characterList.scss";

function CharacterList(props) {
  return (
    <ul className="cards">
      {props.characters.map(character => {
        return (
          <li className="cards__cardContainer" key={character.id}>
            <CharacterCard character={character} />
          </li>
        );
      })}
    </ul>
  );
}

export default CharacterList;
