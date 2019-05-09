import React from "react";

export class RateComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleRate = this.handleRate.bind(this);
  }

  handleRate() {
    if (this.props.index + 1 > this.props.rate.length) {
      this.props.onRate(0);
    } else {
      this.props.onRate(this.props.index + 1);
    }
  }

  render() {
    return (
      <button onClick={this.handleRate}>
        X {this.props.rate[this.props.index]}
      </button>
    );
  }
}
