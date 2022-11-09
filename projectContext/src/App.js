import React from "react";
import Header from "./components/Header";
import { MediaCad } from "./components/Card";
import { Button, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { AllData } from "./Data/data";
import Footer from "./components/Footer";
import ThemeContext from "./context/ThemeContext";

function App() {
  return (
    <ThemeContext>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#F5F5F5",
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
            <Grid container spacing={4}>
              {AllData?.map((el) => {
                return (
                  <Grid item sm={12} xs={12} md={6} xl={4}>
                    <MediaCad
                      name={el.name}
                      caption={el.caption}
                      avatar={el.avatar}
                      comment={el.comment}
                    />
                  </Grid>
                );
              })}
            </Grid>
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
