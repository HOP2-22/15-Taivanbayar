import { createContext } from "react";

const ColorContext = createContext();

export const ContextContainer = (children) => {
  return <ColorContext.Provider>{children}</ColorContext.Provider>;
};
