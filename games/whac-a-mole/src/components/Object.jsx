import upperback from "../images/Upper";
import lowerback from "../images/LowerBack.png";
import rat from "../images/rat.png";
import { Box } from "@mui/system";
import { useState } from "react";

export const ObjectItem = ({ value, point, setPoint }) => {
  const [show, setShow] = useState(true);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "70px",
        height: "230px",
      }}
    >
      <Box
        sx={{
          width: "70px",
          height: "80px",
        }}
      >
        <img src={upperback} alt="upperback" />
      </Box>
      <Box
        onClick={() => {
          setShow(false);
          setPoint(show && point + 1);
          setTimeout(() => {
            setShow(true);
          }, 1200);
        }}
        sx={{
          width: "50px",
          height: "70px",
          marginLeft: "45px",
        }}
      >
        <img
          alt="lowerback"
          src={rat}
          style={{
            transition: "0.3s",
            transform:
              value && show ? "translateY(-40px)" : " translateY(40px)",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "70px",
          height: "80px",
          marginTop: "-24px",
            zIndex: "1",
        }}
      >
        <img src={lowerback} alt="lowerback" />
      </Box>
    </Box>
  );
};
