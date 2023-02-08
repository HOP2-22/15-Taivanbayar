import { Box, Button, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import Work1 from "../images/ss.png";
import Work2 from "../images/Work2.png";
import Work3 from "../images/Work3.png";

const ProjectsImages = () => {
  const { dark } = useContext(DataContext);
  const [more, setMore] = useState(false);

  return (
      <Box
        sx={{
          display: "flex",
          gap: "5%",
          justifyContent:"center",
          flexWrap: "wrap",
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
              width: "250px",
              height: "150px",
              borderRadius: "10px",
                       objectFit: "cover",
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
              width: "250px",
              height: "150px",
              borderRadius: "10px",
              objectFit: "cover",
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
              backgroundColor: dark ? "#3385ff" : "#8080ff",
              width: "200px ",
            }}
           variant="h5"
            onClick={() => setMore(true)}
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
                width: "250px",
                height: "150px",
                borderRadius: "10px",
                objectFit: "cover",
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
  );
};

export default ProjectsImages