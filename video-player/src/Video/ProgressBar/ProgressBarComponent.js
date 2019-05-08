import React from "react";

export class ProgressBarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.setTime = this.setTime.bind(this);
  }

  // set the current time to the parent 'VideoComponent'
  setTime(evt) {
    if (evt) {
      this.props.onSelectTime(Math.round(evt.target.value));
    }
  }

  render() {
    const maxWidth = this.props.maxWidth;
    // const barStyle = {
    //   width: maxWidth * 10
    // };
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
