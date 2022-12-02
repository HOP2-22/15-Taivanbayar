import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import hammer from "../images/hammer.png";

export const Cursor = () => {
  const [valueX, setValueX] = useState();
  const [valueY, setValueY] = useState();
  const [mouseClick, setMouseClick] = useState(false);

  useEffect(() => {
    const moveMouse = (e) => {
      setValueX(e.clientX);
      setValueY(e.clientY);
    };

    const mouseClick = (val) => {
      setMouseClick(val.isTrusted);
      setTimeout(() => {
        setMouseClick(false);
      }, 100);
    };

    document.addEventListener("mousemove", moveMouse);
    document.addEventListener("click", mouseClick);
    return () => {
      document.removeEventListener("mousemove", moveMouse);
      document.removeEventListener("click", mouseClick);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "absolute",
        left: valueX - 20,
        top: valueY - 20,
        zIndex:"5",
        pointerEvents: "none",
      }}
    >
      <img
        src={hammer}
        alt="cursor"
        style={{
          width: "100px",
          height: "100px",
          transform: mouseClick && "rotate(90deg)",
        }}
      />
    </Box>
  );
};
