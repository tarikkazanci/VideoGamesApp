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
import About from './components/About.js'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: [] ,
      query: ""
    }
    this.addGame = this.addGame.bind(this)
  }

  // Making API call to get data from back end via "axios"
  componentDidMount(){
      axios.get("http://localhost:4000/api/games").then((response) => {
        console.log(response.data)
        this.setState({
          games: response.data
        })
      })
    }

  addGame(e) {
    e.preventDefault()
    this.setState({
      query: e.target.value
    })
    this.state.games.push(this.state.query)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar">
              <Link to="/home" className="main-header">T-GAMEZ</Link>
              <Link to="/home">Home</Link>
              <Link to="/home">Games</Link>
              <Link to="/about">About</Link>
          </nav>

          <main>
            <Route path='/home' render={() => {
                return (
                <GameIndex addGame={this.addGame} games={this.state.games} />
              )
              } }
            />
            <Route path="/about" component={About}/>
            <Route path="/games/:name" component={GameShow}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
