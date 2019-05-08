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

  // play or pause video when clicking the button
  handlePlayPause() {
    this.setState({
      played: !this.state.played
    });
    this.state.played ? this.refs.vidRef.pause() : this.refs.vidRef.play();
  }

  // get current video time
  getCurrentTime(evt) {
    this.setState({
      currentTime: Math.round(evt.target.currentTime)
    });
  }

  // get full length of the video
  getDuration(evt) {
    this.setState({
      duration: Math.round(evt.target.duration)
    });
  }

  // change current time when clicking the progressbar
  selectTime(currentPos) {
    this.setState({
      currentTime: currentPos
    });
    this.refs.vidRef.currentTime = currentPos;
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
      <div className="container" style={{ maxWidth: "800px", width: "100" }}>
        <div className="row">
          <video
            ref="vidRef"
            onTimeUpdate={this.getCurrentTime}
            onLoadedMetadata={this.getDuration}
            width={800}
            height={600}
          >
            <source src={source} type="video/mp4" />
          </video>
        </div>
        <div className="controls row">
          <div className="col-md-2 col-xs-2">
            <button onClick={this.handlePlayPause}>
              {this.state.played ? pauseButton : playButton}
            </button>
          </div>
          <ProgressBar
            maxWidth={this.state.duration}
            progress={this.state.currentTime}
            onSelectTime={this.selectTime.bind(this)}
            timer={
              <p>
                {this.state.currentTime} : {this.state.duration} s
              </p>
            }
          />
        </div>
      </div>
    );
  }
}
