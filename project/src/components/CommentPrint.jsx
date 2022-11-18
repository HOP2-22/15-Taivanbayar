import { Container } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext } from "../context/ThemeContext";

const CommentPrinter = (props) => {
  const { color, theme } = useContext(ColorModeContext);
  const { el, output, setOutput, index, image } = props;
  console.log(el)
  const Delete = (index) => {
    setOutput(
      output.filter((sentence, sentenceIndex) => {
        return sentenceIndex !== index;
      })
    );
  };
  return (
    <Container maxWidth="xl"
    sx={{
        display:"flex",
            alignItems:"center",
        justifyContent:"space-between",
    }}>
      <img  
      src={image} 
      style={{
        borderRadius:"50%",
        width:'50px',
        height:'50px'
    }}
    />   

      <p
        style={{
          color: color,
          height:"5vh",
          border:`1px solid ${color}`,
          borderRadius:"5px",
          alignItems:"center",
          display:"flex",   
          padding:"1vh 1vw",  
          backgroundColor: theme
        }}
      >
        {el}
      </p>
      <button onClick={() => Delete(index)} style={{
        height:"5vh",
        width:"6vw",
      }}>Delete the post</button>
            

    </Container>

  );
};

export default CommentPrinter;
