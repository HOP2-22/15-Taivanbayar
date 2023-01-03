import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Container sx={style.designHeader} maxWidth="xl">
      <Typography sx={style.instructionHeader} onClick={() => navigate("/")}>
        Хэрхэн ажилладаг вэ?
      </Typography>
      <Button
        variant="contained"
        style={style.buttonHeader}
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
    padding: "3px 30px 3px 30px",
  }
};