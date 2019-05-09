import React from "react";

export class PlayComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlayPause = this.handlePlayPause.bind(this);
  }

  handlePlayPause() {
    this.props.onPlayPauseVideo(!this.props.played);
  }

  render() {
    const playButton = <i className="fas fa-play-circle fa-1x" />;
    const pauseButton = <i className="fas fa-pause-circle fa-1x" />;
    return (
      <button onClick={this.handlePlayPause}>
        {this.props.played ? pauseButton : playButton}
      </button>
    );
  }
}
