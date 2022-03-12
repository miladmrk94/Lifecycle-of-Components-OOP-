import React, { useState, useEffect, useRef } from "react";

const HocBTN = () => {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const textSaveHandler = () => {
    setText("");
  };

  useEffect(() => {
    inputRef.current = text;
  }, [text]);
  console.log(inputRef.current);
  return (
    <div>
      <input type="text" onChange={textHandler} ref={inputRef} value={text} />
      <button onClick={textSaveHandler}>Rest </button>
      <h2>{text}</h2>
    </div>
  );
};

export default HocBTN;
