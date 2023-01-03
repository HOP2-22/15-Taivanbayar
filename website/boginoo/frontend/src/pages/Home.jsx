import { Box, Button, Container, Input } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Logo from "../assets/images/logo-default.svg";

export const Home = () => {
  const [value, setValue] = useState();
  const [data, setData] = useState([]);
  const linkTransfer = async () => {
    try {
      const res = await axios.post("http://localhost:8700", {
        original: value,
        short: randomValue,
      });
      const el = [...data, res.data];
      setData(el);
      console.log(res);
    } catch (error) {
      console.log({ error: error });
    }
  };
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const GenerateString = (length) => {
    let result = "shortURL/";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };
  const randomValue = GenerateString(6);

  console.log();

  return (
    <Container sx={style.designHome} maxWidth="xl">
      <img src={Logo} alt="logo" />
      <Box
        sx={{
          display: "flex",
          gap: "1vw",
        }}
      >
        <Input
          disableUnderline={true}
          type="text"
          placeholder="https://www.web-huudas.mn"
          style={style.inputHome}
          value={value}
          onChange={(e) => {
            e.preventDefault();
            setValue(e.target.value);
          }}
        />
        <Button
          variant="contained"
          style={style.buttonHome}
          onClick={() => linkTransfer}
        >
          Богиносгох
        </Button>
      </Box>
    </Container>
  );
};
const style = {
  inputHome: {
    width: "20vw",
    height: "4vh",
    background: "#FFFFFF",
    border: "1px solid #F0F0F0",
    boxShadow: `0px 1px 5px rgba(0, 0, 0, 0.16)`,
    borderRadius: `100px`,
    paddingLeft: "15px",
  },
  designHome: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "3vh",
  },
  buttonHome: {
    backgroundColor: " #02B589",
    borderRadius: "100px",
    padding: "3px 33px 3px 33px",
    fontSize: "90%",
  },
};
