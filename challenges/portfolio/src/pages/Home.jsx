import { Box, Container, Typography } from "@mui/material";
import { useContext } from "react";
import Profile from "../images/taivnaa.jpg";
import { DataContext } from "../context/DataContext";
import { Bio } from "../components/Bio";
import { Work } from "../components/Work";
import { Hobbies } from "../components/Hobbies";
import { Projects } from "../components/Projects";
import { Banner } from "../components/Banner";

export const Home = () => {
  const { dark } = useContext(DataContext);
  return (
    <Box
      sx={{
        backgroundColor: dark ? "#000d1a" : " 	#fff2cc",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "45vh",
          }}
        >
          <Banner />
        </Box>
        <Box sx={styles.boxStyle}>
          <Typography
            sx={{
              color: dark ? "#fff2cc" : "black",
              width: "100%",
              height: "10%",
              backgroundColor:  "rgba(255, 255, 255, 0.25)",
              // backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            Hello, I'm a Fullstack developer based in Mongolia
          </Typography>
          <Box sx={styles.containerStyle}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: "700", color: dark ? " 	white" : "#000d1a" }}
              >
                Taivanbayar Erdenebaatar
              </Typography>
              <Typography sx={{ color: dark ? "white" : "#333300" }}>
                Space Cowboy (Developer)
              </Typography>
            </Box>
            <Box>
              <img src={Profile} alt="profile" style={styles.profileImg} />
            </Box>
          </Box>
        </Box>

        <Work />
        <Bio />
        <Hobbies />
        <Projects />
      </Container>
    </Box>
  );
};
export const styles = {
  profileImg: {
    height: "110px",
    width: "110px",
    borderRadius: "50%",
    border: `2px solid white`,
    objectFit: "cover",
  },
  containerStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  boxStyle: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
    gap: "3vh",
    marginTop: -30,
    position: "relative",
    zIndex: 1,
  },
};
