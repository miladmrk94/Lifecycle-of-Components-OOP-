import React, { useState, useEffect } from "react";

const CounterFunction = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState(0);

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  const plusHandler = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    console.log("load CDU");
  }, [num]);

  return (
    <div>
      <input onChange={changeHandler} value={name} />
      <button onClick={plusHandler}>+</button>
      <p>{name}</p>
      <p>{num}</p>
    </div>
  );
};

export default CounterFunction;
