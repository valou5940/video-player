import React from "react";

export class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursorTime: 0,
      progressBarWidth: 0
    };

    this.setTime = this.setTime.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({ progressBarWidth: this.props.progress });
  }

  setTime(evt) {
    const x = evt.clientX - this.props.maxWidth;
    console.log(x);

    this.setState({
      progressBarWidth: Math.round(x / 10)
    });

    this.props.onSelectTime(Math.round(x / 10));
  }

  render() {
    const maxWidth = this.props.maxWidth;
    // const progress = this.props.progress;
    // const totalTime = maxWidth * 10;/
    const barStyle = {
      backgroundColor: "teal",
      border: "2px solid black",
      height: "20px",
      width: maxWidth * 10
    };
    const progressStyle = {
      backgroundColor: "blue",
      borderRight: "2px solid black",
      height: "15px",
      width: this.state.progressBarWidth * 10
    };

    return (
      <div className="bar" style={barStyle} onClick={this.setTime}>
        <div style={progressStyle} />
      </div>
    );
  }
}
