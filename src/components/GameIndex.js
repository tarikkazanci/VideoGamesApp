import React, { Component } from 'react';
import { Link } from "react-router-dom"


class GameIndex extends Component {

render() {
  let videoGames = this.props.games.map((game, i) =>{
    let pathname = `/games/${game.name}`

    return (
      <div key={i}>
        <p><Link to={{ pathname, state: {selectedGame: game}}}> {game.name}</Link></p>
        <img src={game.img_url} alt="game_pic" />
      </div>
    )
  })

return(

  <div>
    <h2>Super Awesome Video Games</h2>
      {videoGames}
  </div>

  )
  }

}

export default GameIndex
