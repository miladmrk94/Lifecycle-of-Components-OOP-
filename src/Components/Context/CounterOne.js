import React, { useContext } from "react";
import { NumberContext, NumberContextDispatcher } from "./CounterProvider";

const CounterOne = () => {
  const number = useContext(NumberContext);
  const setNumber = useContext(NumberContextDispatcher);
  return (
    <div>
      <h3>{number}</h3>
      <h3>{setNumber}</h3>
    </div>
  );
};

export default CounterOne;
