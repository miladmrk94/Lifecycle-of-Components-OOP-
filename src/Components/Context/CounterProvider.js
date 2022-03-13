import React, { useState, useContext } from "react";

export const NumberContext = React.createContext();
const NumberContextDispatcher = React.createContext();

const CounterProvider = ({ children }) => {
  const [number, setNumber] = useState(0);
  return (
    <NumberContext.Provider value={number}>
      <NumberContextDispatcher.Provider value={setNumber}>
        {children}
      </NumberContextDispatcher.Provider>
    </NumberContext.Provider>
  );
};

export default CounterProvider;

export const useNumber = () => {
  return useContext(NumberContext);
};
export const useSetNumber = () => {
  const setNumber = useContext(NumberContextDispatcher);
  const oneHandler = () => {
    setNumber((item) => {
      return item + 2;
    });
  };

  const twoHandler = () => {
    setNumber((item) => {
      return item * 10;
    });
  };

  return [oneHandler, twoHandler];
};
