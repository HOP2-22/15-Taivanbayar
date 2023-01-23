import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FuncContext = createContext();

export const Functions = ({ children }) => {
  const navigate = useNavigate();
  const [checkingInput, setCheckingInput] = useState(null);
  const [value, setValue] = useState("");
  const [arr, setArr] = useState([]);
  const [info, setInfo] = useState();
  const [history, setHistory] = useState([]);
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

  axios.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      config.headers.set("token", token);
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  const linkTransfer = async () => {
    try {
      if (info) {
        const { data } = await axios.post("http://localhost:8800/link", {
          original: value,
          short: randomValue,
          user: info.email,
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
    if (userinfo.email.includes("@") && userinfo.email.includes(".")) {
      if (userinfo.password.length === 8) {
        try {
          const { data } = await axios.post("http://localhost:8800/login", {
            email: userinfo.email,
            password: userinfo.password,
          });
          setInfo(data);
          console.log(data);
          if (data.match) {
            navigate("/");
            setMatch(true);
            Cookies.set("token", data.token, { expires: 7 });
          } else {
            alert("Email or password incorrect");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setCheckingInput(true);
        alert("Please enter password length of 8 characters");
      }
    } else {
      setCheckingInput(false);
      alert("Please enter valid email");
    }
  };

  useEffect(() => {
    const authenticate = async () => {
      const { data } = await axios.get("http://localhost:8800/login/checkUser");
      setMatch(true);
      setInfo({ ...info, email: data.email });
    };
    authenticate();
    const getHistory = async () => {
      const email = info.email;
      const { data } = await axios.post(
        `http://localhost:8800/link/${email}/list`
      );
      setHistory(data ? data : []);
    };
    getHistory();
  }, [info]);

  const deleteURL = async (id) => {
    const delet = await axios.delete(`http://localhost:8800/link/delete/${id}`);
    console.log(delet);
    // getHistory();
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
