import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const Bio = () => {
  const { dark } = useContext(DataContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2vh",
      }}
    >
      <Typography
        sx={{
          color: dark ? "white" : "black",
          textDecoration: dark ? "underline #0040ff 8px  solid" : "underline black 8px  solid",
        }}
        variant="h5"
      >
        Bio
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", color: dark ? "white" : "black" }}
          >
            2007
          </Typography>
          <Typography sx={{ color: dark ? "white" : "black" }}>
            Born in Ulaanbaatar(Улаанбаатар), Mongolia.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", color: dark ? "white" : "black" }}
          >
            2022
          </Typography>
          <Typography sx={{ color: dark ? "white" : "black" }}>
            Started taking a course of being a developer
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", color: dark ? "white" : "black" }}
          >
            2022
          </Typography>
          <Typography sx={{ color: dark ? "white" : "black" }}>
            Started working on projects to improve
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", color: dark ? "white" : "black" }}
          >
            2023 to present
          </Typography>
          <Typography sx={{ color: dark ? "white" : "black" }}>
            Studying!!!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
