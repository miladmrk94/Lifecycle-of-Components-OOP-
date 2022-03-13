import React, { useState } from "react";

const withCounter = (WrapperComp) => {
  const UpComp = () => {
    const [count, setCount] = useState(0);
    const adadHandler = () => {
      setCount(() => {
        return count + 1;
      });
    };
    return <WrapperComp adadHandler={adadHandler} count={count} />;
  };
  return UpComp;
};

export default withCounter;
