import React, { Component } from "react";
import ClassTimer from "./ClassTimer";
import FunctionTimer from "./FunctionTimer";

class ClassCounter extends Component {
  state = {
    name: "",
    count: 0,
    show: true,
  };

  //   changeHandler = (e) => {
  //     this.setState({ name: e.target.value });
  //   };

  //   plusHandler = () => {
  //     this.setState(() => {
  //       return { count: this.state.count + 1 };
  //     });
  //   };

  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevState.count !== this.state.count) {
  //       console.log("update CDU");
  //       console.log(` count ${this.state.count}`);
  //     }
  //   }
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.

  render() {
    return (
      //   <div>
      //     <input onChange={this.changeHandler} />
      //     <button onClick={this.plusHandler}>+</button>
      //     <p>{this.state.name}</p>
      //     <p>{this.state.count}</p>
      //   </div>
      <div>
        <button onClick={() => this.setState({ show: !this.state.show })}>
          show
        </button>
        {this.state.show ? <FunctionTimer /> : null}
      </div>
    );
  }
}

export default ClassCounter;
