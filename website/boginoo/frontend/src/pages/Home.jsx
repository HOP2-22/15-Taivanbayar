import { Box, Button, Container, Input} from "@mui/material";
import Logo from "../assets/images/logo-default.svg";

export const Home = () => {
  return (
    <Container
      sx={style.designHome}
      maxWidth="xl"
    >
      <img src={Logo} alt="logo" />
      <Box sx={{
        display: "flex",
        gap:"1vw"
      }}>
        <Input
        disableUnderline={true}
          type="text"
          placeholder="https://www.web-huudas.mn"
          style={style.inputHome}
        />
        <Button
        variant="contained"
          style={style.buttonHome}
        >
          Богиносгох
        </Button>
      </Box>
    </Container>
  );
};
 const style = {
  inputHome : {
      width: "20vw",
      height: "4vh",
      background: "#FFFFFF",
      border: "1px solid #F0F0F0",
      boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.16)`,
      borderRadius: `100px`,
      paddingLeft:"15px"
  },
  designHome : {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "3vh",
  },
  buttonHome : {
      backgroundColor: " #02B589",
      borderRadius: "100px",
      padding: "3px 33px 3px 33px",
      fontSize:"90%"
  }
}