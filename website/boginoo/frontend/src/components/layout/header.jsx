import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useContext } from "react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { FuncContext } from "../../context/functions";

export const Header = () => {
  const { match, info } = useContext(FuncContext);
  const navigate = useNavigate();
  const [touch, setTouch] = useState(false);
  useState(() => {
    match && setTouch(true);
  }, []);
  console.log(info);
  return (
    <Container sx={style.designHeader} maxWidth="xl">
      <Typography sx={style.instructionHeader}>Хэрхэн ажилладаг вэ?</Typography>
      {match && <Typography>{info?.email}</Typography>}
      {!touch ? (
        <Button
          variant="contained"
          style={style.buttonHeader}
          onClick={() => {
            navigate("/login");
            setTouch(true);
          }}
        >
          Нэвтрэх
        </Button>
      ) : null}
    </Container>
  );
};
const style = {
  designHeader: {
    display: "flex",
    gap: "2vw",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  instructionHeader: {
    color: " #02B589",
    fontWeight: "700",
    fontSize: "20px",
  },
  buttonHeader: {
    backgroundColor: "#02B589",
    borderRadius: "100px",
    padding: "3px 30px 3px 30px",
  },
};
