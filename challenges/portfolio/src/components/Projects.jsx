import { Box, Button, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import Work1 from "../images/ss.png";
import Work2 from "../images/Work2.png";
import Work3 from "../images/Work3.png"

export const Projects = () => {
  const { dark } = useContext(DataContext);
  const [more, setMore] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4vh",
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
        Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5vh",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={Work1}
            alt="project1"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "40px",
            }}
          />
          <Typography variant="h5" sx={{ color: dark ? "white" : "black" }}>
            Boginoo
          </Typography>
          <Typography variant="h6" sx={{ color: dark ? "white" : "black" }}>
            Short URl creator
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={Work2}
            alt="project2"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "40px",
            }}
          />
          <Typography variant="h5" sx={{ color: dark ? "white" : "black" }}>
            Whac A Mole
          </Typography>
          <Typography variant="h6" sx={{ color: dark ? "white" : "black" }}>
            Game
          </Typography>
        </Box>
        {!more ? (
          <Button
            sx={{
              color: "white",
              display: "flex",
              alignItems: "center",
              backgroundColor: dark ? "#3385ff" : "#8080ff",
              width: "30% ",
            }}
            variant="h5"
            onClick={()=> setMore(true)}
          >
            More...
          </Button>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={Work3}
              alt="project3"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "40px",
              }}
            />
            <Typography variant="h5" sx={{ color: dark ? "white" : "black" }}>
              Blog Post
            </Typography>
            <Typography variant="h6" sx={{ color: dark ? "white" : "black" }}>
              Media site
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
