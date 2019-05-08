import React from "react";

export class RepeatComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleRepeat = this.handleRepeat.bind(this);
  }

  handleRepeat() {
    this.props.onRepeat(!this.props.repeat);
  }

  render() {
    const repeatButtonEnabled = <i className="fas fa-redo fa-4x" />;
    const repeatButtonDisabled = (
      <i className="fas fa-redo fa-4x" style={{ color: "gray" }} />
    );

    return (
      <button onClick={this.handleRepeat}>
        {this.props.repeat ? repeatButtonEnabled : repeatButtonDisabled}
      </button>
    );
  }
}
