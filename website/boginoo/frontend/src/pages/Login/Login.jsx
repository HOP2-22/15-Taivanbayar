import { Button, Input, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-default.svg";
import { FuncContext } from "../../context/functions";
import { InputPass } from "../../components/Passinput";
import { useEffect } from "react";

export const Login = () => {
  const { userinfo, setUserinfo, login, inputChecker, emailRef, passwordRef } =
    useContext(FuncContext);

  useEffect(() => {

    inputChecker();
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "4vh",
      }}
    >
      <img src={Logo} alt="logo" />
      <Typography sx={{ color: "#02B589", fontSize: "32px" }}>
        Нэвтрэх
      </Typography>
      <Box>
        <Typography sx={{ marginLeft: "15px" }}>Цахим хаяг</Typography>
        <Box>
          <Input
            disableUnderline={true}
            placeholder="name@mail.domain"
            style={{
              width: "25vw",
              height: "4vh",
              background: "#FFFFFF",
              border: "1px solid #F0F0F0",
              boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.16)`,
              borderRadius: `100px`,
              paddingLeft: "15px",
            }}
            ref={emailRef}
            onChange={(e) =>
              setUserinfo({ ...userinfo, email: e.target.value })
            }
          />
        </Box>
      </Box>
      <Box>
        <Typography sx={{ marginLeft: "15px" }}>Нууц үг</Typography>
        <Input
          disableUnderline={true}
          id="passInput"
          type="password"
          placeholder="••••••••••"
          style={{
            width: "25vw",
            height: "4vh",
            background: "#FFFFFF",
            border: "1px solid #F0F0F0",
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.16)`,
            borderRadius: `100px`,
            paddingLeft: "15px",
          }}
          ref={passwordRef}
          onChange={(e) =>
            setUserinfo({ ...userinfo, password: e.target.value })
          }
          onKeyDown={(e) => e.code === "Enter" && login()}
        />
        <InputPass />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "25vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Input
            disableUnderline={true}
            type="checkbox"
            style={{ color: "#02B589" }}
          />
          <Typography sx={{ color: "#02B589" }}>Намайг сана</Typography>
        </Box>
        <Link style={{ color: "black" }} to="/forgotpass">
          Нууц үгээ мартсан
        </Link>
      </Box>
      <Button
        style={{
          backgroundColor: " #02B589",
          borderRadius: "100px",
          padding: "3px 33px 3px 33px",
          fontSize: "90%",
          width: "25vw",
          color: "white",
        }}
        onClick={() => login()}
      >
        Нэвтрэх
      </Button>
      <Link style={{ color: "#02B589" }} to="/signup">
        Шинэ хэрэглэгч бол энд дарна уу?
      </Link>
    </Container>
  );
};
