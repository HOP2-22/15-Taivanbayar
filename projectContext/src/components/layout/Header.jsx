import React, { useContext } from "react";
import { AppBar, Box, Typography, Switch, Container } from "@mui/material";
import { ColorModeContext } from "../../context/ThemeContext";

export const Header = () => {
  const { theme, changeTheme, color } = useContext(ColorModeContext);
  return (
    <AppBar
      sx={{
        boxShadow: "none",
        height: "8vh",
        backgroundColor: theme,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: theme,
          border: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="h5"
              sx={{
                color: color,
              }}
            >
              team
            </Typography>
            <Typography
              sx={{
                width: "8px",
                height: "8px",
                backgroundColor: color,
                marginTop: "16px",
              }}
            ></Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "center",
              height: "70px",
            }}
          >
            <Switch
              checked={theme && color  === "white" ? true : false}
              onChange={changeTheme}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography sx={{ color: "gray", textDecoration: "underline" }}>
              Products
            </Typography>
            <Typography sx={{ color: "gray", textDecoration: "underline" }}>
              Services
            </Typography>
            <Typography sx={{ color: "gray", textDecoration: "underline" }}>
              Contact
            </Typography>
            <Typography sx={{ color: "gray", textDecoration: "underline" }}>
              Log in
            </Typography>
            <Typography
              sx={{
                color: "#4DA0FD",
                backgroundColor: "",
                width: "100px",
                height: "50px",
                border: "2px solid rgba(77, 160, 253, 0.42)",
                borderRadius: "4px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Get Access
            </Typography>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
