import { Button } from "@mui/material";
import { Box } from "@mui/system";

export const ResultShow = ({
  result,
  award,
  setResult,
  setHoleMove,
  setPoint,
  setSecond,
}) => {
  return (
    <Box
      sx={{
        display: result ? "flex" : "none",
        position: "absolute",
        fontSize: "100px",
        zIndex: "5",
        left: "40%",
        top: "40%",
      }}
    >
      {award ? "You won" : "You lost"}
      <Button
        onClick={() => {
          setResult(false);
          setHoleMove(true);
          setPoint(0);
          setSecond(10);
        }}
      >
        Play again
      </Button>
    </Box>
  );
};
