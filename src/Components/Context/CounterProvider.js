import React from "react";

export const NumberContext = React.createContext();
export const NumberContextDispatcher = React.createContext();

const CounterProvider = ({ children }) => {
  return (
    <NumberContext.Provider value={"milad"}>
      <NumberContextDispatcher.Provider value={"rastgoo"}>
        {children}
      </NumberContextDispatcher.Provider>
    </NumberContext.Provider>
  );
};

export default CounterProvider;
