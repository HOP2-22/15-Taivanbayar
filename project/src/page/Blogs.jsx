import React, { useContext } from "react";
import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { AllCard } from "../components/CardPost";
import { ColorModeContext } from "../context/ThemeContext";

function App() {
  const { theme, color } = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        background: theme,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box sx={{ paddingBottom: "5vh" }}>
            <p style={{ marginTop:"12vh" , fontSize: "44px", color: color }}>
              Blog posts
            </p>
            <p style={{ color: "#6D7D8B", fontSize: "20px" }}>
              Our latest updates and blogs about managing your team
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "50px" }}
            >
              <AllCard />
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
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default App;