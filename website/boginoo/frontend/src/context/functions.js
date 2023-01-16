import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FuncContext = createContext();

export const Functions = ({ children }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [arr, setArr] = useState([]);
  const [info, setInfo] = useState();
  const [match, setMatch] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [userinfo, setUserinfo] = useState({
    email: "",
    password: "",
  });

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const GenerateString = (length) => {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  const randomValue = GenerateString(6);

  const linkTransfer = async () => {
    try {
      const { data } = await axios.post("http://localhost:8800/link", {
        original: value,
        short: randomValue,
      });

      const el = [...arr, data];
      console.log(data);
      setArr(el);
      setValue("");
    } catch (error) {
      console.log({ error: error });
    }
  };

  const createUser = async () => {
    try {
      const res = await axios.post("http://localhost:8800/signup", {
        email: userData.email,
        password: userData.password,
      });
      navigate("/login");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async () => {
    try {
      const { data } = await axios.post("http://localhost:8800/login", {
        email: userinfo.email,
        password: userinfo.password,
      });
      console.log(data);
      setInfo(data);
      if (data.match) {
        navigate("/");
        setMatch(true);
      } else {
        alert("Wrong Password or email")
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
        match: match,
        info: info,
        arr: arr,
        value: value,
        userData: userData,
        setUserData: setUserData,
        setUserinfo: setUserinfo,
        login: login,
        setValue: setValue,
        linkTransfer: linkTransfer,
        createUser: createUser,
      }}
    >
      {children}
    </FuncContext.Provider>
  );
};
