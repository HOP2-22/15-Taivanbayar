import React from "react";
  import { AppBar, Container, Typography, Box } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import LightMode from "../images/sunny.png";
import DarkMode from "../images/crescent-moon.png";
import { useState } from "react";

const Header = () => {
  const { dark, setDark } = useContext(DataContext);
  const [transition, setTransition] = useState(false);
  return (
    <AppBar
      sx={{
        backgroundColor: dark ? "black" : "white",
        display: "flex",
        justifyContent: "space-evenly",
        position: "fixed",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          padding: 2,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h6" sx={{ color: dark ? "white" : "black" }}>
            Taivanbayar Erdenebaatar
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50px",
            height: "50px",
            background: " #5c5cd6",
            display: !dark && !transition ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.2s",
            transform: transition && "translateY(10px)",
            borderRadius: "10px",
          }}
          onClick={() => {
            setDark(!dark);
            setTransition(!transition);
          }}
        >
          <img
            src={DarkMode}
            alt="darkMode"
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "50px",
            height: "50px",
            background: "#e6e600",
            display: dark && transition ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            transition: "0.2s ease-out",
            transform: !transition && "translateY(10px)",
            borderRadius: "10px",
          }}
          onClick={() => {
            setDark(!dark);
            setTransition(!transition);
          }}
        >
          <img
            src={LightMode}
            alt="lightMode"
            style={{ width: "24px", height: "24px" }}
          />
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
