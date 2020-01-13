import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import apiCharacters from "../api/characters";
import "../stylesheets/App.css";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
  }

  componentDidMount() {
    apiCharacters().then(characters => this.setState({ characters }));
  }

  renderCharacterDetail(props) {
    console.log(props.match.params.id);
    const routeId = parseInt(props.match.params.id);

    const character = this.state.characters.find(item => {
      return item.id === routeId;
    });
    if (character === undefined) {
      return <p>Personaje no encontrado</p>;
    } else {
      return <CharacterDetail character={character} />;
    }
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <Header />
        <Filters />
        <Switch>
          <Route exact path="/">
            <CharacterList characters={this.state.characters} />
          </Route>
          <Route
            path="/character/:id"
            render={this.renderCharacterDetail}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
