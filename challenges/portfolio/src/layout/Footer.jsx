import { Container } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const Footer = () => {
  const { dark } = useContext(DataContext);
  return (
    <Container
      sx={{
        color: dark ? "#0040ff" : "black",
        textAlign: "center",
        paddingBottom: "3vh",
      }}
      maxWidth="sm"
    >
      © 2023 Taivanbayar Erdenebaatar. All Right Reserved.
    </Container>
  );
};
