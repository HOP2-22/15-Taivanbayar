import { Box, Container } from "@mui/system";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

import { Images } from "./assets/imgCollection";
import CardCover from "./assets/images/card-image.jpeg";
// function * chunks(arr, n) {
//   for (let i = 0; i < arr.length; i += n) {
//     yield arr.slice(i, i + n);
//   }
// }

const Card = ({ image }) => {
  const [rotate, setRotate] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        height: "300px",
        width: "300px",
      }}
    >
      {rotate ? (
        <img
          src={CardCover}
          alt="cardcover"
          style={{
            width: "300px",
          }}
          onClick={() => {
            setRotate(true);
          }}
        />
      ) : (
        <img
          alt="image"
          src={image.src}
          style={{
            width: "300px",
          }}
          onClick={() => {
            setRotate(false);
          }}
        />
      )}
    </Box>
  );
};

const CardContainer = () => {
  const [cardPost, setCardPost] = useState(Array(10).fill(false));
  const [images, setImage] = useState([]);
  const generate = () => {
    let newImages = [...Images, ...Images].sort((a, b) => Math.random() - 0.5);
    setImage(newImages);
  };

  return (
    <Box>
      <Container>
        {images.map((image, index) => {
          return <Card image={image} index={index} key={index} />;
        })}
        <Button onClick={() => generate()}>generate</Button>
      </Container>
    </Box>
  );
};

export default CardContainer;
