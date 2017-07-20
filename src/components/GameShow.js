import React, { Component } from 'react';
import '../css/GameShow.css';



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
              <li>{comment}</li>
            </div>
          )
        })

    return (
      <div className="gameShow-container">
        <h2 className="game-header">{this.state.game.name}</h2>
            <img src={this.state.game.img_url} alt="game_pic" />
            <p> {this.state.game.genre} </p>
            <p>Platforms: {this.state.game.platforms.join(',')} </p>
            <p> {this.state.game.description} </p>
            <iframe width="560" height="315" title="Game Video" src={this.state.game.video_url}></iframe>

        <h2 className="review-header">Reviews</h2>
            <ul>{gameComments}</ul>

        <h3>Write a Review</h3>
            <form>
              <input type="text" name="name" placeholder="Add a review..."/>
              <button type="submit">Submit</button>
            </form>
      </div>
    )
   }
  }

export default GameShow
