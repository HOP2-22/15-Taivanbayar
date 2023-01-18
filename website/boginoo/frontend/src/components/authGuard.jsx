import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { FuncContext } from "../context/functions";

export const GuardedRoute = ({ children }) => {
  const { userInfo } = useContext(FuncContext);
  console.log(userInfo);
  if (!userInfo) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
