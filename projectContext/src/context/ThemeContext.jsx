import axios from "axios";
import React, { createContext, useState } from "react";

export const ColorModeContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("white");
  const [color, setColor] = useState("#1a1a00");
  const instance = axios.create({
    baseURL: "https://dummyapi.io/data/v1/post",
    headers: { "app-id": "636e0d6642c1f665f684f489" },
  });
  const ColorHandler = () => {
    theme === "white" ? setTheme("#1a1a00") : setTheme("white");
    color === "#1a1a00" ? setColor("white") : setColor("#1a1a00");
  };
  return (
    <ColorModeContext.Provider
      value={{
        theme: theme,
        changeTheme: ColorHandler,
        color: color,
        instance: instance
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};
export default ThemeContext;
