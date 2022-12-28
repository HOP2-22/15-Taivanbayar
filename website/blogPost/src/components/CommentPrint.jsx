import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ColorModeContext } from "../context/ThemeContext";

const CommentPrinter = (props) => {
  const { color } = useContext(ColorModeContext);
  const { el, output, setOutput, index, image, imageStyle, nameUser } = props;
  const Delete = (index) => {
    setOutput(
      output.filter((sentence, sentenceIndex) => {
        return sentenceIndex !== index;
      })
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        border: "black 1px solid",
        borderRadius: "10px",
        padding: "10px",
        alignItems: "center",
      }}
    >
      <Box sx={{
        display:"flex",
        flexDirection: "column",
        alignItems:"center"
      }}>
        <img src={image} alt="avatar" style={imageStyle} />
        <Typography>{nameUser}</Typography>
      </Box>

      <Typography
        style={{
          color: color,
        }}
      >
        {el}
      </Typography>
      <Button onClick={() => Delete(index)}>Delete</Button>
    </Box>
  );
};

export default CommentPrinter;
