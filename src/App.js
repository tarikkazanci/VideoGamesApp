import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  // Redirect
} from "react-router-dom"

import axios from "axios"
import './App.css';
import GameIndex from './components/GameIndex.js'
import GameShow from './components/GameShow.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }

  componentDidMount(){
      axios.get("http://localhost:4000/api/games").then((response) => {
        console.log(response.data)
        this.setState({
          games: response.data
        })
      })
    }

  render() {
    return (
      <Router>
        <div>
          <nav>
              <Link to="/home">Home</Link>
              <Link to="/home">About</Link>
          </nav>

          <main>
            <Route path='/home' render={() => {
                return (
                <GameIndex games={this.state.games} />
              )
              } }
            />

            <Route path="/games/:name" component={GameShow}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
