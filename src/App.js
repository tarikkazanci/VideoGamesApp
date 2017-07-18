import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   // Route
//   // Link,
//   // Redirect
// } from "react-router-dom"

import './App.css';
import axios from "axios"

import GameIndex from './components/GameIndex.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }

  componentDidMount(){
      axios.get("http://localhost:4000/api/games").then((response) => {
        this.setState({
          games: response.data
        })
      })
    }

  render() {
    return (
      <div>
        <nav>

        </nav>

        <main>
            <GameIndex games={this.state.games}/>
        </main>
      </div>
    );
  }
}

export default App;
