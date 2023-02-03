import React from "react";
import "../../App.css";
import { AppBar, Container, Typography, Box } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import LightMode from "../../images/sunny.png";
import DarkMode from "../../images/crescent-moon.png";

const Header = () => {
  const { dark, setDark } = useContext(DataContext);
  console.log(dark);
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
        maxWidth="md"
        sx={{
          display: "flex",
          padding: 2,
          justifyContent: "space-between",
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
          <Box
            sx={{
              display: "flex",
              gap: 3,
            }}
          >
            <Typography sx={{ color: dark ? "white" : "black" }}>
              Works
            </Typography>
            <Typography sx={{ color: dark ? "white" : "black" }}>
              About
            </Typography>
            <Typography sx={{ color: dark ? "white" : "black" }}>
              Contact
            </Typography>
          </Box>
        </Box>
        {!dark ? (
          <Box
            sx={{
              width: "50px",
              height: "50px",
              background: "blue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="Icon-mode-header-dark"
          >
            <img
              src={DarkMode}
              alt="darkMode"
              style={{
                width: "24px",
                height: "24px",
              }}
              onClick={() => setDark(!dark)}
            />
          </Box>
        ) : (
          <Box
            sx={{
              width: "50px",
              height: "50px",
              background: "yellow",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="Icon-mode-header-light"
          >
            <img
              src={LightMode}
              alt="lightMode"
              style={{ width: "24px", height: "24px" }}
              onClick={() => setDark(!dark)}
            />
          </Box>
        )}
      </Container>
    </AppBar>
  );
};

export default Header;
