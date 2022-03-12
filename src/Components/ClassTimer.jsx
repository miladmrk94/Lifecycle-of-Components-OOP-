import React, { Component } from "react";

class ClassTimer extends Component {
  state = { count: 0 };

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log(`ok`);
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    console.log("unmount");
    clearInterval(this.timer);
  }
  render() {
    return <div>SALAM</div>;
  }
}

export default ClassTimer;
