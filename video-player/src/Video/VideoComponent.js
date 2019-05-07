import React from "react";
import source from "./big_buck_bunny.mp4";

export class VideoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      played: false
    };

    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  handlePlayPause(evt) {
    this.setState({
      played: !this.state.played
    });
  }

  render() {
    const playStyle = { color: "purple" };
    const playButton = (
      <i className="fas fa-play-circle fa-4x" style={playStyle} />
    );
    const pauseButton = (
      <i className="fas fa-pause-circle fa-4x" style={playStyle} />
    );
    return (
      <div>
        <video>
          <source controls src={source} type="video/mp4" />
        </video>

        <div>
          <button onClick={this.handlePlayPause}>
            {this.state.played ? pauseButton : playButton}
          </button>
        </div>
      </div>
    );
  }
}
