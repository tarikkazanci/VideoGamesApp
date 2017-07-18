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
  <div>
    <h2> Add a Game </h2>
    <form>
      <input type="text" placeholder="Name"/>
      <input type="text" placeholder="Img Url"/>
      <input type="text" placeholder="Genre"/>
      <input type="text" placeholder="Platforms"/>
      <input type="text" placeholder="Video Url"/>
      <input type="text" placeholder="Description"/>
      <button onSubmit={this.props.addGame} type="submit">Submit</button>
    </form>
    <h1>Super Awesome Video Games</h1>
      {videoGames}
  </div>
  )
  }
}

export default GameIndex
