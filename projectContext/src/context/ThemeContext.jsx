import React, { createContext, useState } from "react";

export const ColorModeContext = createContext();

const ThemeContext = () => {
  const [theme, setTheme] = useState("white");
  const [color, setColor] = useState("#1a1a00");
  const [background, setBackground] = useState("#F5F5F5");

  const ColorHandler = () => {
    theme === "white" ? setTheme("#1a1a00") : setTheme("white");
    color === "#1a1a00" ? setColor("white") : setColor("#1a1a00");
    background === "#F5F5F5" ? setBackground("#1a1a00") : setColor("#F5F5F5");
  };
  return (
    <ColorModeContext.Provider
      value={{
        theme: theme,
        changeTheme: ColorHandler,
        color: color,
        background: background,
      }}
    >
      <></>
    </ColorModeContext.Provider>
  );
};
export default ThemeContext;
