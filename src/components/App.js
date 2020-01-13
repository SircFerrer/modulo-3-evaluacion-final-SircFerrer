import React from 'react';
import Header from "./Header"
import apiCharacters from "../api/characters"
import '../stylesheets/App.css';
import Filters from './Filters';
import CharacterList from './CharacterList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      characters:[]

    }
  }

  componentDidMount() {
    apiCharacters().then(characters => this.setState({ characters }));
  }


  render() {
    console.log(this.state);
    
    return (
      <div>
    <Header/>
    <Filters/>
    <CharacterList characters={this.state.characters}/>
    
      </div>
    );
  }
}

export default App;
