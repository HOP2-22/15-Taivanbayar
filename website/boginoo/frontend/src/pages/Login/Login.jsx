import { Button, Input, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-default.svg"

export const Login = () => {
  return (
    <Container sx={{
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems: "center",
    }}>
        <img src={Logo} alt="logo"/>
      <Typography>Нэвтрэх</Typography>
      <Box>
        <Typography>Цахим хаяг</Typography>
        <Input />
      </Box>
      <Box>
      <Typography>Нууц үг</Typography>
        <Input />
      </Box>
      <Box>
        <Box>
            <Input type="checkbox"/>
            <Typography>Намайг сана</Typography>
        </Box>
        <Link>Нууц үгээ мартсан</Link>
      </Box>
      <Button>Нэвтрэх</Button>
      <Link>Шинэ хэрэглэгч бол энд дарна уу?</Link>
    </Container>
  );
};
