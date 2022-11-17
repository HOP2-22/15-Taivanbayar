import React, { useContext } from "react";
import { Box, Container } from "@mui/system";

import { Link } from "react-router-dom";
import { ColorModeContext } from "../context/ThemeContext";
import {Typography } from "@mui/material";

import arrowImg from "../assets/images/arrowRight.svg";

export const MidPosts = ({ isReversed = true, image, topic }) => {
  const { color, theme } = useContext(ColorModeContext);
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: isReversed ? "row" : "row-reverse",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "30vh",
        backgroundColor: theme,
      }}
    >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5vh",
            width: "50%",
          }}
        >
          <Typography
            sx={{
              color: color,
              fontSize: "50px",
              fontWeight: "500",
            }}
          >
            {topic}
          </Typography>
          <Typography
            sx={{
              color: color,
            }}
          >
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </Typography>
          <Box>
            <Link
              style={{
                color: "#4DA0FD",
              }}
            >
              Learn more{" "}
            </Link>
            <img src={arrowImg} />
          </Box>
        </Box>

        <img src={image} style={{ width: "50%" }} />
    </Container>
  );
};
