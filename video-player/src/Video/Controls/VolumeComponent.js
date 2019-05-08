import React from "react";

export class VolumeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showVolumeSlider: false,
      muted: false
    };

    this.handleVolume = this.handleVolume.bind(this);
    this.displayVolume = this.displayVolume.bind(this);
    this.displayButton = this.displayButton.bind(this);
  }

  //dispay volume slider when clicking button
  displayVolume() {
    this.setState({ showVolumeSlider: true });
  }

  // display button & hide slider when releasing slider
  displayButton() {
    this.setState({ showVolumeSlider: false });
  }

  //change video sound volume in parent component
  handleVolume(evt) {
    if (evt.target.value <= 0) {
      this.setState({
        muted: true,
        showVolumeSlider: false
      });
    } else {
      this.setState({
        muted: false
      });
    }

    this.props.onVolume(evt.target.value);
  }

  render() {
    return (
      <div>
        {!this.state.showVolumeSlider && (
          <button onClick={this.displayVolume}>
            <i
              className={
                this.state.muted
                  ? "fas fa-volume-mute fa-4x"
                  : "fas fa-volume-up fa-4x"
              }
            />
          </button>
        )}
        {this.state.showVolumeSlider && (
          <input
            type="range"
            step={0.05}
            min={0}
            max={1}
            value={this.props.volume}
            onChange={this.handleVolume}
            onMouseUp={this.displayButton}
          />
        )}
      </div>
    );
  }
}
