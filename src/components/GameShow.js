import React, { Component } from 'react';

class GameShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: this.props.location.state.selectedGame
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.game.name}</h2>
        <ul>
          <li><img src={this.state.game.img_url} alt="game_pic" /></li>
          <li>Genre: {this.state.game.genre} </li>
          <li>Platforms: {this.state.game.platform} </li>
          <li>Description: {this.state.game.description} </li>
        </ul>
      </div>
    )
  }

}

export default GameShow
