import React, { createContext, useState } from "react";

export const ColorModeContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("white");

  const ColorHandler = () => {
    theme === "white" ? setTheme("black") : setTheme("white");
  };
  return (
    <ColorModeContext.Provider
      value={{ theme: theme, changeTheme: ColorHandler }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};
export default ThemeContext;
