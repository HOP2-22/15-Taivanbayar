import { Button, Input, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-default.svg";
import { FuncContext } from "../../context/functions";

export const Login = () => {

  const {userinfo, setUserinfo, login} = useContext(FuncContext);
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
          onChange={(e) => setUserinfo({ ...userinfo, email: e.target.value })}
        />
      </Box>
      <Box>
        <Typography sx={{ marginLeft: "15px" }}>Нууц үг</Typography>
        <Input
          disableUnderline={true}
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
          onChange={(e) =>
            setUserinfo({ ...userinfo, password: e.target.value })
          }
        />
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
