import { Box, Container } from "@mui/system";
import { ObjectItem } from "./components/Object";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import hammer from "./images/hammer.png"

const App = () => {
  const [score, setScore] = useState(0);
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
    console.log(a);
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

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: "#B40000",  
        cursor: `url(${hammer}), auto`
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8vh",
          justifyContent: "space-between",

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
            Time:00:00:00
          </h1>
          <h1
            style={{
              color: "white",
            }}
          >
            Score: {score}    
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
            onClick={()=> {
              setScore()
            }}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {row.map((active, index) => (
                <ObjectItem value={active} key={index} />
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
