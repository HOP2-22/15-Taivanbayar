import "./App.css";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";

import Images from "./assets/imgCollection.jsx"
import cardCover from "./images/card-image.jpeg";



const CardContainer = () => {
  const [cardPost, setCardPost] = useState(Array(10).fill(false));
  return (
    <Box>
      <Container>
        {cardPost.map((val) => {
         ;
        })}
      </Container>
    </Box>
  );
};

export default CardContainer;
