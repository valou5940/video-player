import React from "react";
import source from "./big_buck_bunny.mp4";
import { ProgressBarComponent } from "./ProgressBar/ProgressBarComponent";
import { PlayComponent } from "./Controls/PlayComponent";
import { RepeatComponent } from "./Controls/RepeatComponent";
import { VolumeComponent } from "./Controls/VolumeComponent";
import { StopComponent } from "./Controls/StopComponent";
import { RateComponent } from "./Controls/RateComponent";
import { FullScreenComponent } from "./Controls/FullScreenComponent";

export class VideoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repeat: false,
      played: false,
      stopProgress: false,
      fullscreen: false,
      duration: 0,
      currentTime: 0,
      volume: 50,
      rate: [1.0, 2.0, 0.5],
      currentRateIndex: 0
    };

    this.playPauseVideo = this.playPauseVideo.bind(this);
    this.repeatVideo = this.repeatVideo.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
    this.getDuration = this.getDuration.bind(this);
    this.selectTime = this.selectTime.bind(this);
    this.endVideo = this.endVideo.bind(this);
    this.stopVideo = this.stopVideo.bind(this);
    this.changeRate = this.changeRate.bind(this);
    this.setFullscreen = this.setFullscreen.bind(this);
  }

  // get current video time
  getCurrentTime(evt) {
    this.setState({
      currentTime: Math.floor(evt.target.currentTime * 100) / 100
    });
  }

  //when video ends, reset all states
  endVideo() {
    this.setState({
      stopProgress: true,
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

  // stop playing video
  stopVideo(stopped) {
    if (stopped === true) {
      this.endVideo();
      this.refs.vidRef.pause();
    }
  }

  // change default playback rate
  changeRate(index) {
    this.setState({
      currentRateIndex: index
    });
    this.refs.vidRef.playbackRate = this.state.rate[index];
  }

  //set or not fullscreen mode
  setFullscreen(fullscreen) {
    this.setState({
      fullscreen: fullscreen
    });
    console.log(this.state.fullscreen);
  }

  render() {
    const wrapperStyle = this.state.fullscreen
      ? { width: "100%", height: "100%" }
      : { width: "50%", height: "50%" };

    return (
      <div className="container-fluid wrapper" style={wrapperStyle}>
        <div className="row">
          <video
            ref="vidRef"
            onTimeUpdate={this.getCurrentTime}
            onEnded={this.endVideo}
            onLoadedMetadata={this.getDuration}
            width={"100%"}
            height={"100%"}
          >
            <source src={source} type="video/mp4" />
          </video>
        </div>
        <div className="row bar">
          <div className="col-2">
            <div className="row controls">
              <div className="col-4 play-button">
                <PlayComponent
                  played={this.state.played}
                  onPlayPauseVideo={this.playPauseVideo.bind(this)}
                />
              </div>
              <div className="col-4 stop-button">
                <StopComponent
                  stopped={this.state.played}
                  onStopVideo={this.stopVideo.bind(this)}
                />
              </div>
              <div className="col-4 repeat-button">
                <RepeatComponent
                  repeat={this.state.repeat}
                  onRepeat={this.repeatVideo.bind(this)}
                />
              </div>
            </div>
            <div className="row controls">
              <div className="col-4 rate-button">
                <RateComponent
                  onRate={this.changeRate.bind(this)}
                  rate={this.state.rate}
                  index={this.state.currentRateIndex}
                />
              </div>
              <div className="col-4 volume-button">
                <VolumeComponent
                  onVolume={this.changeVolume.bind(this)}
                  volume={this.state.volume}
                />
              </div>
              <div className="col-4 fullscreen-button">
                <FullScreenComponent
                  onFullscreen={this.setFullscreen.bind(this)}
                  fullscreen={this.state.fullscreen}
                />
              </div>
            </div>
          </div>
          <div className="col-10 timer">
            <ProgressBarComponent
              played={this.state.played}
              maxWidth={this.state.duration}
              progress={this.state.currentTime}
              onSelectTime={this.selectTime.bind(this)}
              timer={
                <span>
                  {Math.round(this.state.currentTime)} : {this.state.duration} s
                </span>
              }
            />
          </div>
        </div>
        {/* <div className="row controls" /> */}
      </div>
    );
  }
}
