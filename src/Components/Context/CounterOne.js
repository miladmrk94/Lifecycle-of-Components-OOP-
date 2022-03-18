import React, { useReducer } from "react";
const CounterOne = () => {
  const initialItem = {
    numOne: 0,
    numTwo: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add1":
        return { ...state, numOne: state.numOne + 1 };
      case "add5":
        return { ...state, numOne: state.numOne + 5 };
      case "add10":
        return { ...state, numTwo: state.numTwo + 10 };
      default:
        return initialItem;
    }
  };

  const [number, dispatch] = useReducer(reducer, initialItem);

  return (
    <dive>
      <h3>Count 1: {number.numOne}</h3>
      <h3>Count 2: {number.numTwo}</h3>
      <button onClick={() => dispatch({ type: "add1" })}>+1</button>
      <button onClick={() => dispatch({ type: "add5" })}>+5</button>
      <button onClick={() => dispatch({ type: "add10" })}>+10</button>
    </dive>
  );
};

export default CounterOne;
