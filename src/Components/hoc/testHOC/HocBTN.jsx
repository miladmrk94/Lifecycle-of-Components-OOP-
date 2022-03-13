import React from "react";
import withCounter from "../Wrapper";
const HocBTN = ({ adadHandler, count }) => {
  return (
    <div>
      milad
      <button onClick={adadHandler}>adad:{count}</button>
    </div>
  );
};

export default withCounter(HocBTN);
