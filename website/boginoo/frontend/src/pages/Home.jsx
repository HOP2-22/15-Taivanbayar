import { useState } from "react";
import { Box, Button, Container, Input} from "@mui/material";
import axios from "axios";
import Logo from "../assets/images/logo-default.svg";
import { LinkList } from "../components/LinkList";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  console.log(location.state);
  const [value, setValue] = useState("");
  const [arr, setArr] = useState([]);

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

  const linkTransfer = async () => {
    try {
      const res = await axios.post("http://localhost:8800", {
        original: value,
        short: randomValue,
      });
      const el = [...arr, res.data];
      setArr(el);
      setValue("")
    } catch (error) {
      console.log({ error: error });
    }
  };

  return (
    <Container sx={style.designHome} maxWidth="xl">
      <img src={Logo} alt="logo" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "15vh",
        }}
      >
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
            onClick={() => {
              linkTransfer();
            }}
          >
            ????????????????????
          </Button>
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5vh",
            marginTop: "-8vh",
          }}
        >
          <Typography
            sx={{
              color: "#02B589",
              fontWeight: "700",
              fontSize: "32px",
              marginLeft: "15px",
            }}
          >
            ????????
          </Typography>
          {list?.map((el, index) => {
            return <AllLinks key={index} list={el} />;
          })}
        </Box> */}

        <Box>
          {arr?.map((el, index) => {
            return <LinkList key={index} list={el} />;
          })}
        </Box>
      </Box>
    </Container>
  );
};
const style = {
  inputHome: {
    width: "40vw",
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
