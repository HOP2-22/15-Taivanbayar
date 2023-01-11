import { Box } from "@mui/system";
import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FuncContext = createContext();

export const Functions = ({ children }) => {
  const navigate = useNavigate();
  const [info, setInfo] = useState()
  const [match, setMatch] =useState(false)
  const [userinfo, setUserinfo] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    try {
      const { data } = await axios.post("http://localhost:8800/login", {
        email: userinfo.email,
        password: userinfo.password,
      });
      console.log(data)
      setInfo(data)
      if (data.match) {
        navigate("/");
        setMatch(true)
      } else {
        return <Box>Wrong Password or email</Box>;
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FuncContext.Provider
      value={{
        userinfo: userinfo,
        setUserinfo: setUserinfo,
        login: login,
        match:match,
        info: info
      }}
    >
      {children}
    </FuncContext.Provider>
  );
};
