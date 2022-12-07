import { Box, Container } from "@mui/system";
import { useState } from "react";
import { Button, Grid } from "@mui/material";

import { Images } from "./assets/imgCollection";
import CardCover from "./assets/images/card-image.jpeg";

const Card = ({ image, flipsame, rotate, setRotate }) => {

  return (
    <Box
      onClick={() => {
        setRotate(!rotate);
        flipsame(rotate);
      }}
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "200px",
        position: "relative",
        transform: `rotateY(${rotate ? "180deg" : "0deg"})`,
        transformStyle: "preserve-3d",
        transition: "transform 0.6s",
        boxSizing: "border-box",
      }}
    >
      <img
        src={image.src}
        alt="something"
        style={{
          position: "absolute",
          height: "100%",
          width: "200px",
        }}
      />
      <img
        src={CardCover}
        alt="cardcover"
        style={{
          position: "absolute",
          height: "100%",
          width: "200px",
          transform: "rotateY(180deg)",
        }}
      />
    </Box>
  );
};

const CardContainer = () => {
  const [images, setImage] = useState([]);
  const [rotate, setRotate] = useState(false);


  const generate = () => {
    let newImages = [...Images, ...Images].sort((a, b) => Math.random() - 0.5);
    setImage(newImages);
  };

  const flipsame = (rotate) => {
    if (rotate === typeof Array) {
      setTimeout(() => {
        for (let i = 1; i <= 2; i++) {
          rotate[i].id === rotate[i + 1].id ? setRotate([]) : setRotate(false)
        }
      });
    }
  };

  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Grid spacing={3} container>
          {images.map((image, index) => {
            return (
              <Grid item xl={2.4} md={2.4}>
                <Card
                  image={image}
                  index={index}
                  key={index}
                  flipsame={flipsame}
                  setRotate={setRotate}
                  rotate={rotate}
                />
              </Grid>
            );
          })}
        </Grid>
        <Button onClick={() => generate()}>Generate</Button>
      </Container>
    </Box>
  );
};

export default CardContainer;
