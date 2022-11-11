import React, { useContext } from "react";
import Header from "../components/Header";
import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import Footer from "../components/Footer";
import ThemeContext, { ColorModeContext } from "../context/ThemeContext";
import { useState } from "react";
import { useEffect } from "react";
import { AllCard } from "../components/CardPost";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyapi.io/data/v1/post",
  headers: { "app-id": "636e0d6642c1f665f684f489" },
});

function App() {
//   const { theme, changeTheme, color } = useContext(ColorModeContext);

  return (
    <ThemeContext>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: '#F5F5F5',
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xl">
          <Header />
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
        </Container>
        <Footer />
      </div>
    </ThemeContext>
  );
}

export default App;
