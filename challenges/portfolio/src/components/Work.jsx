import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const Work = () => {
  const { dark } = useContext(DataContext);
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap:"2vh"
    }}>
      <Typography
        sx={{
          color: dark ? "white" : "black",
          textDecoration: "underline #0040ff 8px  solid",
        }}
        variant="h5"
      >
        Work
      </Typography>
      <Typography sx={{ color: dark ? "white" : "black" }}>
        Taivnaa is a freelance and a full-stack developer based in Osaka with a
        passion for building digital services/stuff he wants. He has a knack for
        all things launching products, from planning and designing all the way
        to solving real-life problems with code. When not online, he loves
        hanging out with his camera. Currently, he is living off of his own
        product called Inkdrop. He publishes content for marketing his products
        and his YouTube channel called "Dev as Life" has more than 100k
        subscribers.
      </Typography>
    </Box>
  );
};
