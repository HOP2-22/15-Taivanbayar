import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const Hobbies = () => {
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
        I ♥
      </Typography>
      <Typography sx={{ color: dark ? "white" : "black" }}>
        Movies, Science, Playing Basketball, Music, Books
      </Typography>
    </Box>
  );
};
