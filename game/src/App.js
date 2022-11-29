import { Box, Container } from "@mui/system";
import { ObjectItem } from "./components/Object";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import hammer from "./images/hammer.png";

const App = () => {
  const [point, setPoint] = useState(0);
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(false);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [holeMove, setHoleMove] = useState(false);
  const [holeActive, setHoleActive] = useState(
    new Array(3).fill(null).map(() => new Array(5).fill(false))
  );
  const create = () => {
    let a = new Array(3).fill(null).map(() => new Array(5).fill(false));
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 5; j++) {
        a[i][j] = Math.round(Math.random()) ? true : false;
      }
    }
    setHoleActive(a);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      create();
    }, 1000);
    if (!holeMove) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [holeMove]);

  useEffect(() => {
    if (count) {
      const timeiInterval = setInterval(() => {
        setNumber((pre) => pre + 1);
      }, 10);
      if (number === 100) {
        setNumber(0);
        setSecond(second + 1);
        if (second === 60) {
          setSecond(0);
          setMinute(minute + 1);
        }
      }
      return () => clearInterval(timeiInterval);
    }
  }, [count, number, second, minute]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: "#B40000",
        cursor: `url(${hammer}), auto`,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1
            style={{
              color: "white",
            }}
          >
            Time:{minute}:{second}:{number}
          </h1>
          <h1
            style={{
              color: "white",
            }}
          >
            Score: {point}
          </h1>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {holeActive.map((row, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {row.map((active, index) => (
                <ObjectItem value={active} key={index} setPoint={setPoint} point={point} />
              ))}
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              width: "100px",
              height: "70px",
              borderRadius: "30%",
              background: "#00CEA9",
              color: "white",
            }}
            onClick={() => {
              setHoleMove(!holeMove);
              setCount(!count);
            }}
          >
            Start
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default App;
