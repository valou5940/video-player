import React from "react";

export class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progressBarWidth: 0
    };

    this.setTime = this.setTime.bind(this);
  }

  setTime(evt) {
    this.setState({
      progressBarWidth: Math.round(evt.target.value)
    });

    this.props.onSelectTime(Math.round(evt.target.value));
  }

  render() {
    const maxWidth = this.props.maxWidth;
    const barStyle = {
      width: maxWidth * 10
    };

    return (
      <div className="bar col-md-10 col-xs-10">
        <input
          type="range"
          min="0"
          max={maxWidth}
          style={barStyle}
          onChange={this.setTime}
          value={this.props.progress}
        />
        {this.props.timer}
      </div>
    );
  }
}
