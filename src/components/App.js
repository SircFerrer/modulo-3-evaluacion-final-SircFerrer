import React from 'react';
import Header from "./Header"
import apiCharacters from "../api/characters"
import '../stylesheets/App.css';
import Filters from './Filters';


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
    
      </div>
    );
  }
}

export default App;
