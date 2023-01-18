import { Button, Input, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext, useState } from "react";
import Logo from "../../assets/images/logo-default.svg";
import { InputPass } from "../../components/Passinput";
import { FuncContext } from "../../context/functions";

export const SignUp = () => {
  const { userData, setUserData, createUser } = useContext(FuncContext);
  const [check, setCheck] = useState("");
  console.log(userData, "<-- userData", check, "<-- check");
  const CheckPass = () => {
    if(check === userData.password) {
      createUser()
    } else {
      alert("Passwords do not match")
    }
  }
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
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </Box>
      <Box>
        <Typography sx={style.cap}>Нууц үг</Typography>
        <Input
          id="passInput"
          type="password"
          disableUnderline={true}
          style={style.inp}
          placeholder="••••••••••"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <InputPass />
      </Box>
      <Box>
        <Typography sx={style.cap}>Нууц үгээ давтна уу?</Typography>
        <Input
          id="passInputSign"
          type="password"
          disableUnderline={true}
          style={style.inp}
          placeholder="••••••••••"
          onChange={(e) => setCheck(e.target.value)}
        />
        <InputPass check={true}/>
      </Box>
      <Button style={style.but} onClick={() => CheckPass()}>
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
  topic: { fontSize: "32px", color: "#02B589" },
};
