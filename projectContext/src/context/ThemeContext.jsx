import React, { createContext, useState } from "react";

export const ColorModeContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("white");
  const [color, setColor] = useState("#1a1a00");

  const ColorHandler = () => {
    theme === "white" ? setTheme("#1a1a00") : setTheme("white");
    color === "#1a1a00" ? setColor("white") : setColor("#1a1a00");
  };
  return (
    <ColorModeContext.Provider
      value={{ theme: theme, changeTheme: ColorHandler, color: color }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};
export default ThemeContext;
