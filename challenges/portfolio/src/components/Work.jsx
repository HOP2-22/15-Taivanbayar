import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const Work = () => {
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
          textDecoration: dark
            ? "underline #0040ff 8px  solid"
            : "underline black 8px  solid",
        }}
        variant="h5"
      >
        Work
      </Typography>
      <Typography sx={{ color: dark ? "white" : "black" }}>
        Taivnaa is a full-stack developer based in Ulaanbaatar who studies and
        developes sites with passion for contributing to face the oncoming
        obstacles of software technology.
      </Typography>
    </Box>
  );
};
