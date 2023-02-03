import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext();

export const Context = ({ children }) => {
  const [dark, setDark] = useState(false);
  return (
    <DataContext.Provider
      value={{
        dark: dark,
        setDark: setDark
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
