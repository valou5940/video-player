import React from "react";

export class StopComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleStop = this.handleStop.bind(this);
  }

  handleStop() {
    this.props.onStopVideo(!this.props.played);
  }

  render() {
    return (
      <button onClick={this.handleStop}>
        <i className="fas fa-stop fa-4x" />
      </button>
    );
  }
}
