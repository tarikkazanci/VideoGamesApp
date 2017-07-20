import React, { Component } from 'react';
import Home from './components/Home.js'
import GameIndex from './components/GameIndex.js'
import GameShow from './components/GameShow.js'
import About from './components/About.js'
import GameForm from './components/GameForm.js'
import './css/Layout.css';


import {
  BrowserRouter as Router,
  Route,
  Link,
  // Redirect
} from "react-router-dom"

import axios from "axios"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: [] ,
      name: '',
      img_url: '',
      genre: '',
      platforms: '',
      video_url: '',
      description: '',
    }
    // Binds methods to the state
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
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

  // Handles input change
      handleChange(e){
        this.setState({
          [e.target.name]: e.target.value
        })
      }

  // Handles form submission
       handleSubmit = (e) => {
        e.preventDefault();
        const { name, img_url, genre, platforms, video_url, description } = this.state;

  // Post request to the server
       axios.post('http://localhost:4000/api/games', { name: name, img_url: img_url, genre: genre,
         platforms: platforms, video_url: video_url, description: description })
         .then((result) => {
           console.log(result);
          });
      }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar">
              <Link to="/home" className="main-header">T-GAMEZ</Link>
              <Link to="/home">Home</Link>
              <Link to="/games">Games</Link>
              <Link to="/about">About</Link>
          </nav>

          <main>
            <Route exact path='/games' render={() => {
              return (
                <GameForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
              )
            } }
          />
            <Route exact path='/games' render={() => {
                return (
                <GameIndex handleChange={this.handleChange} handleSubmit={this.handleSubmit} games={this.state.games} />
              )
              } }
            />
            <Route exact path="/games/:name" component={GameShow}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/about" component={About}/>
            {/* <Route
              path="/*"
              render={() => {
                return <Redirect to="/home" />
              }}
            /> */}
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
