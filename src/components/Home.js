import React, { Component } from 'react';
import { Link } from "react-router-dom"
import '../css/Home.css';


class Home extends Component {
  render() {
    return(
      <div className="home-container">
        <h1 className="home-header">Welcome to T-GAMEZ!</h1>
        <Link to="/games">Click to see all the super awesome games!</Link>
      </div>
    )
  }
}

export default Home
