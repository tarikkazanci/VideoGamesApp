import React, { Component } from 'react';
import { Link } from "react-router-dom"


class GameIndex extends Component {
render() {
  let videoGames = this.props.games.map((game, i) =>{
    let pathname = `/games/${game.name}`

    return (
      <div key={i}>
        <p><Link to={{ pathname, state: {selectedGame: game}}}> {game.name}</Link></p>
        <Link to={{ pathname, state: {selectedGame: game}}}> <img src={game.img_url} alt="game_pic" /></Link>
      </div>
    )
  })

return(
  // CREATE FORM
  <div>
      <h2> Add a Game </h2>
      <form onSubmit={this.props.handleSubmit}>
          <input type="text" name="name"     onChange={this.props.handleChange}   placeholder="Name"/>
          <input type="text" name="img_url"  onChange={this.props.handleChange} placeholder="Img Url"/>
          <input type="text" name="genre"    onChange={this.props.handleChange}    placeholder="Genre"/>
          <input type="text" name="platforms" onChange={this.props.handleChange} placeholder="Platforms"/>
          <input type="text" name="video_url"  onChange={this.props.handleChange} placeholder="Video Url"/>
          <input type="text" name="description" onChange={this.props.handleChange} placeholder="Description"/>
          <button type="submit">Submit</button>
      </form>

      <h1>Super Awesome Video Games</h1>
        {videoGames}
  </div>
  )
  }
}

export default GameIndex
