import React, { Component } from 'react';

class GameIndex extends Component {

render() {
  let videoGames = this.props.games.map((game, i) =>{
    return (
      <div key={i}>
        <p>{game.name}</p>
        <img src={game.img_url} alt="gamepic" />
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
