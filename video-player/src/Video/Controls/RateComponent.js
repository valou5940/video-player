import React from "react";

export class RateComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleRate = this.handleRate.bind(this);
  }

  handleRate() {
    if (this.props.rate[this.props.index + 1] === undefined) {
      this.props.onRate(0);
    } else {
      this.props.onRate(this.props.index + 1);
    }
  }

  render() {
    return (
      <button onClick={this.handleRate}>
        <i className="fas fa-angle-double-right fa-1x" />
      </button>
    );
  }
}
