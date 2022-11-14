import React from "react";
import InstaImg from "../../Data/Instagram.svg";
import FbImg from "../../Data/Facebook.svg";
import TwtImg from "../../Data/Twitter.svg";
import nav from "../../Data/arrow.svg";
import { Box, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const Footer = () => {
  return (
    <Box
      sx={{
        height: "50vh",
        background: "#252B3B",
        display: "flex",
        color: "white",

      }}
    >
      <Container
      maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", marginBottom: "20%" }}>
            <Typography variant="h4">team</Typography>
            <Box
              sx={{
                backgroundColor: "#0BBEF2",
                width: "8px",
                height: "8px",
                marginTop: "25%",
              }}
            ></Box>
          </Box>
          <Stack spacing={3} sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", gap: "9%" }}>
              <img src={InstaImg} />
              <Typography>Instagram</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "9%" }}>
              <img src={FbImg} />
              <Typography>Facebook</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "9%" }}>
              <img src={TwtImg} />
              <Typography>Twitter</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "9%" }}>
              <img src={InstaImg} />
              <Typography>Instagram</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "9%" }}>
              <img src={FbImg} />
              <Typography>Facebook</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "9%" }}>
              <img src={TwtImg} />
              <Typography>Twitter</Typography>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-around", width: "40%" }}
        >
          <Stack spacing={3}>
            <Typography>Use Cases</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "19px" }}>
              <Typography>UI Design</Typography>
              <Typography>UX Design</Typography>
              <Typography>Prototyping</Typography>
              <Typography>UI Design</Typography>
              <Typography>UX Design</Typography>
              <Typography>Prototyping</Typography>
            </Box>
          </Stack>
          <Stack spacing={3}>
            <Typography>Explore</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "19px" }}>
              <Typography>Figma</Typography>
              <Typography>Customers</Typography>
              <Typography>Why I Love Figma</Typography>
              <Typography>Figma</Typography>
              <Typography>Customers</Typography>
              <Typography>Why I Love Figma</Typography>
            </Box>
          </Stack>
          <Stack spacing={3}>
            <Typography>Resources</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "19px" }}>
              <Typography>Community Resources Hub</Typography>
              <Typography>Support</Typography>
              <Typography>Education</Typography>
              <Typography>Community Resources Hub</Typography>
              <Typography>Support</Typography>
              <Typography>Education</Typography>
            </Box>
          </Stack>
        </Box>
        <Stack spacing={3} sx={{ marginTop: "-12%" }}>
          <Typography variant="h5">Subscribe to our newsletter</Typography>
          <Box sx={{ display: "flex" }}>
            <input
              style={{ width: "100%", height: "50px" }}
              placeholder="Email"
            />
            <img src={nav} style={{ marginLeft: "-14%" }} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
