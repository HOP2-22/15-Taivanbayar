import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FuncContext = createContext();

export const Functions = ({ children }) => {
  const navigate = useNavigate();

  const [checkUser, setCheckUser] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPass, setCheckPass] = useState(false);
  const [value, setValue] = useState("");
  const [arr, setArr] = useState();
  const [info, setInfo] = useState();
  const [match, setMatch] = useState(false);
  const [page, setPage] = useState(1);
  const [countPag, setCountPag] = useState();
  const [history, setHistory] = useState();
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

  const LogOut = () => {
    Cookies.remove("token");
    setInfo("");
  };
  const linkTransfer = async () => {
    try {
      if (info) {
        const { data } = await axios.post(
          "https://boginoo-backend.onrender.com/link",
          {
            original: value,
            short: randomValue,
            user: info.email,
          }
        );
        setArr(data);
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
      await axios.post("https://boginoo-backend.onrender.com/signup", {
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
      setCheckEmail(false);
      if (userinfo.password.length === 8) {
        setCheckPass(false);
        try {
          const { data } = await axios.post(
            "https://boginoo-backend.onrender.com/login",
            {
              email: userinfo.email,
              password: userinfo.password,
            }
          );
          setInfo(data);
          if (data.match) {
            navigate("/");
            setMatch(true);
            Cookies.set("token", data.token, { expires: 1 });
            setCheckUser(false);
          } else {
            setCheckUser(true);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setCheckPass(true);
      }
    } else {
      setCheckEmail(true);
    }
  };

  useEffect(() => {
    const authenticate = async () => {
      const { data } = await axios.get(
        "https://boginoo-backend.onrender.com/login/checkUser"
      );
      if (data.exp * 1000 <= Date.now()) {
        LogOut();
      } else {
        setMatch(true);
        setInfo({ ...info, email: data.email });
      }
    };
    authenticate();
  }, []);
  useEffect(() => {
    const getPagination = async () => {
      const user = info.email;
      const limit = 4;
      const { data } = await axios.get(
        `https://boginoo-backend.onrender.com/link/${user}/${page}/${limit}`
      );
      setHistory(() => (data ? data : []))
      const res = await axios.get(
        `https://boginoo-backend.onrender.com/link/${user}/list`
      );
      const list = res.data;
      if (list.length < 5) {
        setCountPag(1);
      } else {
        if (list.length % 4 !== 0) {
          const number = parseInt(list.length / 4) + 1;
          setCountPag(number);
        } else {
          const length = list.length / 4;
          setCountPag(length);
        }
      }
    };
    if (info) getPagination();
  }, [info, page]);

  return (
    <FuncContext.Provider
      value={{
        userinfo: userinfo,
        match: match,
        info: info,
        arr: arr,
        value: value,
        userData: userData,
        checkEmail: checkEmail,
        checkPass: checkPass,
        checkUser: checkUser,
        history: history,
        countPag: countPag,
        setPage: setPage,
        LogOut: LogOut,
        setMatch: setMatch,
        setInfo: setInfo,
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
