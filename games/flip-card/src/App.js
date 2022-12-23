import { Box, Container } from "@mui/system";
import { useState } from "react";
import { Button, Grid } from "@mui/material";
import "./App.css";
import { Images } from "./assets/imgCollection";
import CardCover from "./assets/images/cover.webp";

const Card = ({ image, flip, isFlipped }) => {
  return (
    <Box
      onClick={() => flip()}
      sx={{
        width: "150px",
        height: "150px",
        position: "relative",
        transform: `rotateY(${isFlipped ? "180deg" : "0deg"})`,
        transformStyle: "preserve-3d",
        transition: "transform 0.6s",
        boxSizing: "border-box",
      }}
    >
      {image !== null && (
        <>
          <img
            src={CardCover}
            alt="cardcover"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
            }}
          />

          <img
            src={image.src}
            alt="something"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          />
        </>
      )}
    </Box>
  );
};

const CardContainer = () => {
  const [images, setImage] = useState([]);
  const [firstFlip, setFisrtFlip] = useState(null);

  const [flipped, setFlipped] = useState(new Array(10).fill(false));

  const generate = () => {
    const newImages = [...Images, ...Images].sort(
      (a, b) => Math.random() - 0.5
    );
    setImage(newImages);
  };
  const flip = (index) => {
    let newFlipped = flipped.map((item, i) => (i === index ? !item : item));

    setFlipped(newFlipped);
    if (firstFlip === null) {
      setFisrtFlip(index);
    } else {
      if (images[firstFlip] === images[index] && index !== firstFlip) {
        setTimeout(() => {
          setImage(images.map((img) => (img === images[index] ? null : img)));
        }, 600);
      }
      setTimeout(() => {
        setFisrtFlip(null);
        setFlipped(new Array(10).fill(false));
      }, 600);
    }

    if (images.filter((img) => (img === null ? null : img)) === null) {
      return <div>You won</div>;
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          width: "100vw",
        }}
      >
        <Grid spacing={3} container> 
          {images.map((image, index) => {
            return (
              <Grid md={2.4} xl={2.4} item>
                <Card
                  flip={() => flip(index)}
                  image={image}
                  isFlipped={flipped[index]}
                  key={index}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center  ",
        }}
        onClick={() => generate()}
      >
        Generate
      </Button>
    </Box>
  );
};

export default CardContainer;
