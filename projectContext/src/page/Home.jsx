import React, { useContext } from "react";
import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
// import ThemeContext, { ColorModeContext } from "../context/ThemeContext";
import { AllCard } from "../components/CardPost";


function App() {
  // const { theme, changeTheme, color } = useContext(ColorModeContext);

  return (
    // <ThemeContext>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: '#F5F5F5',
          justifyContent: "center",
        }}
      >
          <Box sx={{ marginBottom: "90px" }} />
          <h1 style={{ marginBottom: "40px", fontSize: "44px" }}>Blog posts</h1>
          <p style={{ color: "#6D7D8B", fontSize: "20px" }}>
            Our latest updates and blogs about managing your team
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "50px" }}
          >
            <AllCard  />
          </div>
          <Button
            sx={{
              width: "150px",
              height: "50px",
              background: "#1E2742",
              opacity: "0.3",
              borderRadius: "4px",
              color: "#6D7D8B;",
              marginLeft: "43%",
              marginTop: "70px",
            }}
          >
            Next
          </Button>
      </div>
    // </ThemeContext>
  );
}

export default App;
