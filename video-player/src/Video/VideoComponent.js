import React from "react";
import source from "./big_buck_bunny.mp4";
import { ProgressBarComponent } from "./ProgressBar/ProgressBarComponent";
import { PlayComponent } from "./Controls/PlayComponent";
import { RepeatComponent } from "./Controls/RepeatComponent";
import { VolumeComponent } from "./Controls/VolumeComponent";

export class VideoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repeat: false,
      played: false,
      duration: 0,
      currentTime: 0,
      volume: 50
    };

    this.playPauseVideo = this.playPauseVideo.bind(this);
    this.repeatVideo = this.repeatVideo.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
    this.getDuration = this.getDuration.bind(this);
    this.selectTime = this.selectTime.bind(this);
    this.endVideo = this.endVideo.bind(this);
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

  // play or pause video when clicking the button
  playPauseVideo(played) {
    this.setState({
      played: played
    });

    this.state.played ? this.refs.vidRef.pause() : this.refs.vidRef.play();
  }

  // repeat video or not when it's finished
  repeatVideo(repeat) {
    this.setState({
      repeat: repeat
    });

    this.state.repeat
      ? (this.refs.vidRef.loop = false)
      : (this.refs.vidRef.loop = true);
  }

  // change video  sound volume
  changeVolume(volume) {
    this.setState({
      volume: volume
    });

    this.refs.vidRef.volume = volume;
  }

  render() {
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
            <PlayComponent
              played={this.state.played}
              onPlayPauseVideo={this.playPauseVideo.bind(this)}
            />
          </div>
          <div className="col-sm-1 repeat-button">
            <RepeatComponent
              repeat={this.state.repeat}
              onRepeat={this.repeatVideo.bind(this)}
            />
          </div>
          <div className="col-sm-1 volume-buton">
            <VolumeComponent
              onVolume={this.changeVolume.bind(this)}
              volume={this.state.volume}
            />
          </div>
          <div className="col-md-11 timer">
            <ProgressBarComponent
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
