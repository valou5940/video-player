import React from "react";

export class ProgressBarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.setTime = this.setTime.bind(this);
    // this.shouldStop.bind(this);
  }

  // prevent from reloading video automatically after being stop
  componentDidUpdate(prevProps) {
    if (
      !this.props.played &&
      prevProps.progress === 0 &&
      this.props.progress > prevProps.progress
    ) {
      this.props.onSelectTime(0);
    }
  }

  // set the current time to the parent 'VideoComponent'
  setTime(evt) {
    this.props.onSelectTime(Math.round(evt.target.value));
  }

  render() {
    const maxWidth = this.props.maxWidth;

    return (
      <div className="col-sm-12">
        <input
          type="range"
          min="0"
          max={maxWidth}
          step="0.01"
          // style={barStyle}
          onChange={this.setTime.bind(this)}
          value={this.props.progress}
        />
        <p>{this.props.timer}</p>
      </div>
    );
  }
}
