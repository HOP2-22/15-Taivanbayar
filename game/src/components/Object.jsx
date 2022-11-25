import upperback from "../images/UpperBack.png";
import lowerback from "../images/LowerBack.png";
import rat from "../images/rat.png";
import { Box } from "@mui/system";
import { useState } from "react";

export const ObjectItem = ({ value }) => {
  const [show, setShow] = useState(true);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
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
        }}
        sx={{
          width: "50px",
          height: "70px",
          postition: "absolute",
          zIndex: 1,
          bottom: "100px",
          marginLeft: "45px",
        }}
      >
        <img
          alt="lowerback"
          src={rat}
          style={{
            transition: "0.6s",
            transform: value && show ? "translateY(-40px)" : "translateY(40px)",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "70px",
          height: "80px",
          postition: "absolute",
          zIndex: 2,
          marginTop: "-24px",
        }}
      >
        <img src={lowerback} alt="lowerback" />
      </Box>
    </Box>
  );
};
