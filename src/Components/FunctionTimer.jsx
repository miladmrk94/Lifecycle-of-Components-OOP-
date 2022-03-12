import React, { useState, useEffect } from "react";
import { render } from "react-dom";

const FunctionTimer = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const xxx = setInterval(() => {
      console.log("salam");
      setNum(num + 1);
    }, 1000);
    return () => {
      clearInterval(xxx);
      console.log("unMount timer");
    };
  }, []);
  return <div>I'm Function timer</div>;
};

export default FunctionTimer;
