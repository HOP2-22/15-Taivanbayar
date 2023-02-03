import { Box, Container, Typography } from "@mui/material";
import { useContext } from "react";
import Profile from "../images/taivnaa.jpg";
import Header from "../components/layout/Header";
import { DataContext } from "../context/DataContext";

export const Home = () => {
  const { dark } = useContext(DataContext);
  return (
    <Box
      sx={{
        backgroundColor: dark ? "black" : "white",
      }}
    >
      <Header />
      <Container
        maxWidth="md"
        sx={{
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          backgroundColor: dark ? "black" : "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundImage: `url(${Profile})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              height: "40vh",
            }}
          ></Box>
          <Typography sx={{ color: dark ? "white" : "black" }}>
            Hello!, I'm a fullstack developer based in Mongolia
          </Typography>
          <Box>
            <img
              src={Profile}
              alt="profile"
              style={{
                height: "110px",
                width: "110px",
                borderRadius: "50%",
                border: `2px solid white`,
              }}
            />
          </Box>
        </Box>
        <Box>
          <Typography sx={{ color: dark ? "white" : "black" }}>Work</Typography>
          <Typography sx={{ color: dark ? "white" : "black" }}>
            Takuya is a freelance and a full-stack developer based in Osaka with
            a passion for building digital services/stuff he wants. He has a
            knack for all things launching products, from planning and designing
            all the way to solving real-life problems with code. When not
            online, he loves hanging out with his camera. Currently, he is
            living off of his own product called Inkdrop. He publishes content
            for marketing his products and his YouTube channel called "Dev as
            Life" has more than 100k subscribers.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ color: dark ? "white" : "black" }}>Bio</Typography>
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
              <Typography sx={{ color: dark ? "white" : "black" }}>
                2007
              </Typography>
              <Typography sx={{ color: dark ? "white" : "black" }}>
                Born in Ulaanbaatar(), Mongolia.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
              }}
            >
              <Typography sx={{ color: dark ? "white" : "black" }}>
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
              <Typography sx={{ color: dark ? "white" : "black" }}>
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
              <Typography sx={{ color: dark ? "white" : "black" }}>
                2023 to present
              </Typography>
              <Typography sx={{ color: dark ? "white" : "black" }}>
                Studying!!!
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ color: dark ? "white" : "black" }}>I ♥</Typography>
          <Typography sx={{ color: dark ? "white" : "black" }}>
            Movies, Science, Playing Basketball, Music, Books
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
