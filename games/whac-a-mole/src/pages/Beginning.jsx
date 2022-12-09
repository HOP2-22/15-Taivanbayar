import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cursor } from "../components/Cursor";
import { LevelChooser } from "../components/LevelChoose";
import { TemplateChooser } from "../components/TemplateOption";
import { Game } from "./Game";

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
      }}
    >
      <Cursor />
      <TemplateChooser setTemplater={setTemplater} templater={templater} />
      <LevelChooser setLevel={setLevel} />
      <Button onClick={() => navigate('/game', {state : templater, level})}>Start the Game</Button>
    </Box>
  );
};
