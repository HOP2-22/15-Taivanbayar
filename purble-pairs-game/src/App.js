import "./App.css";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";

import amino from "./images/amino-image.jpeg";
import armin from "./images/armin-image.webp";
import Bertholdt from "./images/Bertholdt-image.jpeg";
import erwin from "./images/erwin-image.jpeg";
import jean from "./images/jean-image.jpeg";
import cardCover from "./images/card-image.jpeg";

const CardContainer = () => {
  const [cardPost, setCardPost] = useState(Array(10).fill(false));
  const images = [amino, armin, Bertholdt, erwin, jean]
  return (
    <Box>
      <Container>
        {cardPost.map((val) => {
          images.map((image) => {
            <img
              src={image}
              alt="imagesg"
              style={{
                width: "10vw",
                height: "20vh",
              }}
            />;
          });
        })}
      </Container>
    </Box>
  );
};

export default CardContainer;
