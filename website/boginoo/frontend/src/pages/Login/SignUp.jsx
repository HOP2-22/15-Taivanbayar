import { Button, Input, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Logo from "../../assets/images/logo-default.svg";

export const SignUp = () => {
  return (
    <Container>
      sx=
      {{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "4vh",
      }}
      <img src={Logo} alt="logo" />
      <Typography sx={{ color: "#02B589", fontSize: "32px" }}>
        Бүртгүүлэх
      </Typography>
      <Box>
        <Typography sx={{ marginLeft: "15px" }}>Цахим хаяг</Typography>
        <Input
          disableUnderline={true}
          style={{
            width: "25vw",
            height: "4vh",
            background: "#FFFFFF",
            border: "1px solid #F0F0F0",
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.16)`,
            borderRadius: `100px`,
            paddingLeft: "15px",
          }}
          placeholder="name@mail.domain"
        />
      </Box>
      <Box>
        <Typography sx={{ marginLeft: "15px" }}>Нууц үг</Typography>
        <Input
          disableUnderline={true}
          style={{
            width: "25vw",
            height: "4vh",
            background: "#FFFFFF",
            border: "1px solid #F0F0F0",
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.16)`,
            borderRadius: `100px`,
            paddingLeft: "15px",
          }}
          placeholder="••••••••••"
        />
      </Box>
      <Box>
        <Typography sx={{ marginLeft: "15px" }}>Нууц үгээ давтна уу?</Typography>
        <Input
          disableUnderline={true}
          style={{
            width: "25vw",
            height: "4vh",
            background: "#FFFFFF",
            border: "1px solid #F0F0F0",
            boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.16)`,
            borderRadius: `100px`,
            paddingLeft: "15px",
          }}
          placeholder="••••••••••"
        />
      </Box>
      <Button>Бүртгүүлэх</Button>
    </Container>
  );
};
