import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [touch, setTouch] = useState(false)
  return (
    <Container sx={style.designHeader} maxWidth="xl">
      <Typography sx={style.instructionHeader}>
        Хэрхэн ажилладаг вэ?
      </Typography>
      <Button
        variant="contained"
        style={style.buttonHeader}
        sx={{
          display: touch && 'none'
        }}
        onClick={() => {
          navigate("/log  in");
          setTouch(true)
        }}
      >
        Нэвтрэх
      </Button>
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
    padding: "3px 30px 3px 30px"
  }
};
