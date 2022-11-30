import { Box, Container } from "@mui/system";
import { ObjectItem } from "./components/Object";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import hammer from "./images/hammer.png";

const App = () => {
  const [point, setPoint] = useState(0);
  const [number, setNumber] = useState(0);
  const [second, setSecond] = useState(5);
  const [count, setCount] = useState(false);

  const [valueX, setValueX] = useState();
  const [valueY, setValueY] = useState();
  const [mouseClick, setMouseClick] = useState(false);
  const [award, setAward] = useState();
  const [result, setResult] = useState(false);

  const [holeMove, setHoleMove] = useState(false);
  const [holeActive, setHoleActive] = useState(
    new Array(3).fill(null).map(() => new Array(5).fill(false))
  );
  const create = () => {
    let newRow = new Array(3).fill(null).map(() => new Array(5).fill(false));
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 5; j++) {
        newRow[i][j] = Math.round(Math.random()) ? true : false;
      }
    }
    setHoleActive(newRow);
  };

  useEffect(() => {
    const moveMouse = (e) => {
      setValueX(e.clientX);
      setValueY(e.clientY);
      console.log(e.clientX, e.clientY);
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
        setNumber((pre) => pre - 1);
      }, 10);
      if (number === 0) {
        setNumber(99);
        setSecond(second - 1);
      }
      if (second === 0 && number === 0) {
        setResult(true);
        setHoleMove(false);
        clearInterval(timeiInterval);
        setNumber(0);
        setSecond(0);
        if ((point) => 6) {
          setAward(true);
        } else {
          setAward(false);
        }
      }

      return () => clearInterval(timeiInterval);
    }
  }, [count, number, second]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: "#B40000",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: valueX,
          top: valueY,
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
      {/* cursor display */}
      <Box
        sx={{
          display: result ? "flex" : "none",
          position: "absolute",
          fontSize: "100px",
          zIndex: "5",
          left:"40%",
          top:"40%",
        }}
      >
        {award ? "You won" : "You lost"}
        <Button onClick={()=> {
          setResult(false);
          setHoleMove(true);
          setPoint(0);
          setSecond(5);
          
        }}>Play again</Button>
      </Box>
      {/* result display */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          filter: result ? "blur(8px)" : "",
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
            Time:{second}:{number}
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
                <ObjectItem
                  value={active}
                  key={index}
                  setPoint={setPoint}
                  point={point}
                />
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
              marginTop: 20,
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
