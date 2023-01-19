import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FuncContext = createContext();

export const Functions = ({ children }) => {
  const navigate = useNavigate();
  const [checkingInput, setCheckingInput] = useState(null);
  const [value, setValue] = useState("");
  const [arr, setArr] = useState([]);
  const [info, setInfo] = useState();
  const [history, setHistory] = useState();
  const [match, setMatch] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [userinfo, setUserinfo] = useState({
    email: "",
    password: "",
  });
  const emailRef = useRef();
  const passwordRef = useRef();

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

  const linkTransfer = async (token) => {
    try {
      if (info) {
        const { data } = await axios.post("http://localhost:8800/link", {
          original: value,
          short: randomValue,
          user: info.email,
          token: info.token,
        });
        const el = [...arr, data];
        setArr(el);
        setValue("");
      } else {
        alert("Login First");
      }
    } catch (error) {
      console.log({ error: error });
    }
  };

  const createUser = async () => {

        try {
          await axios.post("http://localhost:8800/signup", {
            email: userData.email,
            password: userData.password,
          });
          navigate("/login");
        } catch (error) {
          console.log(error);
        }

  };

  const login = async () => {
    if (userinfo.email.includes("@") && userinfo.email  .includes(".")) {
      if (userinfo.password.length === 8) {
        try {
          const { data } = await axios.post("http://localhost:8800/login", {
            email: userinfo.email,
            password: userinfo.password,
          });
          localStorage.setItem("token", data.token);
          localStorage.setItem("email", data.email);
          setInfo(data);
          getHistory([data.token, data.email]);
          if (data.match) {
            navigate("/");
            setMatch(true);
          } else {
            alert("Email or password incorrect");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setCheckingInput(true);
        alert("Please enter valid password");
      }
    } else {
      setCheckingInput(false);
      alert("Please enter valid email");
    }
  };
  const getHistory = async (props) => {
    const token = props[0];
    const { data } = await axios.post(
      `http://localhost:8800/link/${props[1]}/list`,
      {
        token,
      }
    );
    setHistory(data);
  };
  useEffect(() => {
    const authenticate = async () => {
      const email = await localStorage.getItem("email");
      const token = await localStorage.getItem("token");
      const res = await axios.post(`http://localhost:8800/${email}`, {
        token: token,
      });
      setMatch(true);
      setInfo(res.data.user[0]);
    };
    authenticate();
  }, []);

  const deleteURL = async (id) => {
    await axios.delete(`http://localhost:8800/link/delete/${id}`);
  };
  const inputChecker = () => {
    checkingInput ? passwordRef.current.focus() : emailRef.current.focus();
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
        history: history,
        checkingInput: checkingInput,
        emailRef: emailRef,
        passwordRef: passwordRef,
        setCheckingInput: setCheckingInput,
        inputChecker: inputChecker,
        setMatch: setMatch,
        setInfo: setInfo,
        setHistory: setHistory,
        setUserData: setUserData,
        deleteURL: deleteURL,
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
