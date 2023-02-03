import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Work1 from "../images/ss.png";

export const Projects = () => {
  const { dark } = useContext(DataContext);
  return (
    <Box>
      <Typography
        sx={{
          color: dark ? "white" : "black",
          textDecoration: "underline #0040ff 8px  solid",
        }}
        variant="h5"
      >
        Projects I made
      </Typography>
      <Box>
        <Box>
          <img src={Work1} alt="project1" />
          <Typography>Boginoo</Typography>
          <Typography>Short URl creator</Typography>
        </Box>
      </Box>
    </Box>
  );
};
