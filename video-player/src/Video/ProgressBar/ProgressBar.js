import React from "react";
import { ETIME } from "constants";

export class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorTime: 0,
      progressBarWidth: 0
    };

    this.setTime = this.setTime.bind(this);
  }

  //   componentWillReceiveProps() {
  //     this.setState({ progressBarWidth: this.props.progress });
  //   }

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
      <div className="bar col-md-10">
        <input
          type="range"
          min="0"
          max={maxWidth}
          style={barStyle}
          onChange={this.setTime}
        />
        {this.props.timer}
      </div>
    );
  }
}
