import React from "react";
import source from "./big_buck_bunny.mp4";
import { ProgressBar } from "./ProgressBar/ProgressBar";

export class VideoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      played: false,
      duration: 0,
      currentTime: 0
    };

    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
    this.getDuration = this.getDuration.bind(this);
    this.selectTime = this.selectTime.bind(this);
  }

  handlePlayPause() {
    this.setState({
      played: !this.state.played
    });

    this.state.played ? this.refs.vidRef.pause() : this.refs.vidRef.play();
  }

  getCurrentTime(evt) {
    this.setState({
      currentTime: Math.round(evt.target.currentTime)
    });
  }

  getDuration(evt) {
    this.setState({
      duration: Math.round(evt.target.duration)
    });
  }

  selectTime(currentPos) {
    this.setState({
      currentTime: currentPos
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
      <div className="container">
        <video
          ref="vidRef"
          onTimeUpdate={this.getCurrentTime}
          onLoadedMetadata={this.getDuration}
        >
          <source src={source} type="video/mp4" />
        </video>

        <div className="controls">
          <button onClick={this.handlePlayPause}>
            {this.state.played ? pauseButton : playButton}
          </button>
          <span>
            {this.state.currentTime} : {this.state.duration}
          </span>
          <ProgressBar
            maxWidth={this.state.duration}
            progress={this.state.currentTime}
            onSelectTime={this.selectTime}
          />
        </div>
      </div>
    );
  }
}
