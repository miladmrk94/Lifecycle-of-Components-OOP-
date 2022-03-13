import React from "react";
import { useReducer } from "react";
const CounterReducer = () => {
  const initialState = { product: 0, product2: 0 };
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add1":
        return { ...state, product: state.product + action.value };
      case "addFive1":
        return { ...state, product: state.product + action.value };

      case "add2":
        return { ...state, product2: state.product2 + action.value };
      case "addFive2":
        return { ...state, product2: state.product2 + action.value };
      default:
    }
  }, initialState);
  return (
    <div>
      <h3>count: {count.product}</h3>
      <h3>count Two: {count.product2}</h3>
      <button onClick={() => dispatch({ type: "add1", value: 1 })}>+1</button>
      <button onClick={() => dispatch({ type: "addFive1", value: 5 })}>
        +5
      </button>

      <button onClick={() => dispatch({ type: "add2", value: 1 })}>+1</button>
      <button onClick={() => dispatch({ type: "addFive2", value: 5 })}>
        +5
      </button>
    </div>
  );
};

export default CounterReducer;
