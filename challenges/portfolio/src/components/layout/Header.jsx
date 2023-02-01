import React from "react";
import { AppBar, Container, Typography } from "@mui/material";

function Header() {
  const dark = true;
  return (
    <div>
      <AppBar
        sx={{
          backgroundColor: dark ? "black" : "white",
          display: "flex",
          justifyContent: "space-evenly",
          position: "fixed",
        }}
      >
        <Container>
          <Typography variant="h5" sx={{ color: dark ? "white" : "black" }}>
            Taivanbayar Erdenebaatar
          </Typography>
          <button
            //   onClick={() => setDark(!dark)}
            style={{ width: "100px", height: "20px" }}
          >
            dark
          </button>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
