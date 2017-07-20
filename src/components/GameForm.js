import React, { Component } from 'react';
import '../css/GameForm.css';


class GameForm extends Component {
render() {
  return(
    <div className="gameForm-container">
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
    </div>
  )
}
}

export default GameForm
