import React, { useContext } from "react";
import { useNumber, useSetNumber } from "./CounterProvider";

const CounterOne = () => {
  const number = useNumber();
  const [oneHandler, twoHandler] = useSetNumber();

  return (
    <div>
      <button onClick={oneHandler}>Count:{number}</button>
      <button onClick={twoHandler}>Count:{number}</button>
    </div>
  );
};

export default CounterOne;
