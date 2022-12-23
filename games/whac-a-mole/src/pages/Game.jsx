import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Cursor } from "../components/Cursor";
import { ObjectItem } from "../components/Object";
import { ResultShow } from "../components/ResultShow";

export const Game = (props) => {
  const { state } = useLocation();
  // console.log(state);
  const [time, setTime] = useState(state.level)
  const [point, setPoint] = useState(0);
  const [number, setNumber] = useState(0);
  const [second, setSecond] = useState(10);
  const [count, setCount] = useState(false);

  const [result, setResult] = useState(false);
  const [award, setAward] = useState();
  const [holeMove, setHoleMove] = useState(false);
  const [holeActive, setHoleActive] = useState(
    new Array(state.templater.a)
      .fill(null)
      .map(() => new Array(state.templater.b).fill(false))
  );
  const create = () => {
    let newRow = new Array(state.templater.a)
      .fill(null)
      .map(() => new Array(state.templater.b).fill(false));
    for (let i = 0; i < state.templater.a; i++) {
      for (let j = 0; j < state.templater.b; j++) {
        newRow[i][j] = Math.round(Math.random()) ? true : false;
      }
    }
    setHoleActive(newRow);
  };

  useEffect(() => {
    setTime(time ? 1000 : !time ? 500 : 200)
    const interval = setInterval(() => {
      create();
    }, time);
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
        if (point > 10) {
          setAward(true);
        } else {
          setAward(false);
        }
      }

      return () => clearInterval(timeiInterval);
    }
  }, [count, number, second, time]);

  const style = {
    bottomBut: {
      width: "100px",
      height: "70px",
      borderRadius: "30%",
      background: "#00CEA9",
      color: "white",
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "120vh",
        background: "#B40000",
      }}
    >
      <Cursor />
      <ResultShow
        result={result}
        award={award}
        setResult={setResult}
        setHoleMove={setHoleMove}
        setPoint={setPoint}
        setSecond={setSecond}
      />

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
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              width: "10vw",
            }}
          >
            Time:{second}:{number}
          </h1>
          <Button
            sx={style.bottomBut}
            onClick={() => {
              setHoleMove(!holeMove);
              setCount(!count);
            }}
          >
            Start
          </Button>
          <h1
            style={{
              color: "white",
              width: "10vw",
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
      </Container>
    </Box>
  );
};
