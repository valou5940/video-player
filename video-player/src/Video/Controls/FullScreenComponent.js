import React from "react";

export class FullScreenComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleFullscreen = this.handleFullscreen.bind(this);
  }

  handleFullscreen() {
    this.props.onFullscreen(!this.props.fullscreen);
  }

  render() {
    return (
      <button onClick={this.handleFullscreen}>
        <i className="fas fa-expand fa-1x" />
      </button>
    );
  }
}
