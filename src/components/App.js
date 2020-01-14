import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import apiCharacters from "../api/characters";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import "../sylesheets/app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      search: "",
      check: true
    };
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

  }

  componentDidMount() {
    apiCharacters().then(characters => this.setState({ characters }));
  }

  //events
  handleSearch(data) {
    this.setState({
      search: data.value
    });
  }
  handleCheck(check) {
    this.setState({
      check: check.value
    })
  }

  //helpers

  filterCharacters() {
    return this.state.characters.filter(character => {
      return character.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
  }

  // render
  renderCharacterDetail(props) {

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
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Filters
              handleSearch={this.handleSearch}
              search={this.state.search}
              handleCheck={this.handleCheck}
            />
            <CharacterList characters={this.filterCharacters()} />
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
