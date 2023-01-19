import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FuncContext } from "../context/functions";

export const AllLinks = ({ list, index }) => {
  const { deleteURL, setHistory, history } = useContext(FuncContext);
  const DeleteURL = (idx) => {
    setHistory(
      history.filter((el, i) => {
        deleteURL(el._id);
        return idx !== i;
      })
    );
  };
  return (
    <Container
      sx={{
        display: "flex",
        borderBottom: "1px solid #E2E2E2",
        justifyContent: "space-between",
        paddingBottom: "2vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <Typography
          sx={{
            color: "#000000",
            opacity: 0.5,
          }}
        >
          Өгөгдсөн холбоос:
        </Typography>
        <Typography>{list.original}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "50%",
          gap: "2vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "#000000",
              opacity: 0.5,
            }}
          >
            Богино холбоос:
          </Typography>
          <Typography>{list.short}</Typography>
        </Box>
        <Link
          style={{ color: "#02B589", marginTop: "2vh" }}
          onClick={() => {
            navigator.clipboard.writeText(list.short);
          }}
        >
          Хуулж авах
        </Link>
        <Typography
          style={{ color: "#02B589", marginTop: "2vh", cursor: "pointer" }}
          onClick={() => DeleteURL(index)}
        >
          Delete
        </Typography>
      </Box>
    </Container>
  );
};
