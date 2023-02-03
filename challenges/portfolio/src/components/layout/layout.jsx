import { Box } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Footer } from "./Footer";
import Header from "./Header";

export const Layout = ({ children }) => {
  const { dark } = useContext(DataContext);
  return (
    <Box
      sx={{
        backgroundColor: !dark ? "white" : "black",
      }}
    >
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
