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
    this.endVideo = this.endVideo.bind(this);
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

  //when video ends, reset all states
  endVideo() {
    this.setState({
      currentTime: 0,
      played: false
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
    const playButton = <i className="fas fa-play-circle fa-4x" />;
    const pauseButton = <i className="fas fa-pause-circle fa-4x" />;
    return (
      <div className="container-fluid">
        <div className="row">
          <video
            ref="vidRef"
            onTimeUpdate={this.getCurrentTime}
            onEnded={this.endVideo}
            onLoadedMetadata={this.getDuration}
            width={"100%"}
            height={600}
          >
            <source src={source} type="video/mp4" />
          </video>
        </div>
        <div className="row controls">
          <div className="col-sm-1 play-button">
            <button onClick={this.handlePlayPause}>
              {this.state.played ? pauseButton : playButton}
            </button>
          </div>
          <div className="col-md-11 timer">
            <ProgressBar
              maxWidth={this.state.duration}
              progress={this.state.currentTime}
              onSelectTime={this.selectTime.bind(this)}
              timer={
                <span>
                  {this.state.currentTime} : {this.state.duration} s
                </span>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
