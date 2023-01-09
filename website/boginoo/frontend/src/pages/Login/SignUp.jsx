import { Button, Input, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo-default.svg";

export const SignUp = () => {
  const navigate = useNavigate();
  const [userinfo, setUserinfo] = useState({
    email: "",
    password: "",
  });
  const createUser = async () => {
    try {
      console.log(userinfo.email, userinfo.password);
      const res = await axios.post("http://localhost:8800/signup", {
        email: userinfo.email,
        password: userinfo.password,
      });
      navigate("/login");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userinfo);
  return (
    <Container sx={style.container}>
      <img src={Logo} alt="logo" />
      <Typography sx={style.topic}>Бүртгүүлэх</Typography>
      <Box>
        <Typography sx={style.cap}>Цахим хаяг</Typography>
        <Input
          disableUnderline={true}
          style={style.inp}
          placeholder="name@mail.domain"
          onChange={(e) => {
            setUserinfo({ ...userinfo, email: e.target.value });
          }}
        />
      </Box>
      <Box>
        <Typography sx={style.cap}>Нууц үг</Typography>
        <Input
          disableUnderline={true}
          style={style.inp}
          placeholder="••••••••••"
          onChange={(e) => {
            setUserinfo({ ...userinfo, password: e.target.value });
          }}
        />
      </Box>
      <Box>
        <Typography sx={style.cap}>Нууц үгээ давтна уу?</Typography>
        <Input
          disableUnderline={true}
          style={style.inp}
          placeholder="••••••••••"
        />
      </Box>
      <Button style={style.but} onClick={() => createUser()}>
        Бүртгүүлэх
      </Button>
    </Container>
  );
};

const style = {
  inp: {
    width: "25vw",
    height: "4vh",
    background: "#FFFFFF",
    border: "1px solid #F0F0F0",
    boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.16)`,
    borderRadius: `100px`,
    paddingLeft: "15px",
  },
  cap: {
    marginLeft: "15px",
  },
  but: {
    backgroundColor: " #02B589",
    borderRadius: "100px",
    padding: "3px 33px 3px 33px",
    fontSize: "90%",
    width: "25vw",
    color: "white",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "4vh",
  },
  topic: {},
};
