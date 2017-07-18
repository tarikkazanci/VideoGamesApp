import React, { Component } from 'react';


class GameShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      game: this.props.location.state.selectedGame
    }
  }

  render() {

    let gameComments = this.state.game.comments.map((comment, i) =>{
      return (
        <div key={i}>
          <ul>
            <li>{comment.body}</li>
          </ul>
        </div>
      )
    })

    return (
      <div>
        <h2>{this.state.game.name}</h2>

          <img src={this.state.game.img_url} alt="game_pic" />
          <p>Genre: {this.state.game.genre} </p>
          <p>Platforms: {this.state.game.platforms.join(',')} </p>
          <p> {this.state.game.description} </p>
          <iframe width="560" height="315" title="Game Video" src={this.state.game.video_url}></iframe>
           <h3>Reviews</h3>
          <p> {gameComments} </p>
      </div>
    )
  }
}

export default GameShow
