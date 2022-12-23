import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cursor } from "../components/Cursor";
import { LevelChooser } from "../components/LevelChoose";
import { TemplateChooser } from "../components/TemplateOption";

export const Beginning = () => {
  let navigate = useNavigate();
  const [templater, setTemplater] = useState({
    a: 3,
    b: 5,
  });
  const [level, setLevel] = useState("easy");

  return (
    <Box
      sx={{
        widht: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",  
        gap:"2vw"
      }}
    >
      <Cursor />
      <Box
      sx={{
        display:"flex",
        gap:"2vw"
      }}>
        <TemplateChooser setTemplater={setTemplater} templater={templater} />
        <LevelChooser setLevel={setLevel} />
      </Box>
      <Button onClick={() => navigate("/game", { state: { templater, level }})}>
        Start the Game
      </Button>
    </Box>
  );
};
