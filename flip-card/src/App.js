import "./App.css";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";

import Images from "./assets/imgCollection.jsx"
import cardCover from "./images/card-image.jpeg";



const CardContainer = () => {
  const [cardPost, setCardPost] = useState(Array(10).fill(false));
  const [some, setSome] = useState([])

  useEffect(()=>{
      setSome(Images.sort(Images.map((image)=>{
       image = Math.random() - 0.5
    })))
  }, [])
  
  return (
    <Box>
      <Container>
        {cardPost.map(() => {
          
        })}
      </Container>
    </Box>
  );
};

export default CardContainer;
