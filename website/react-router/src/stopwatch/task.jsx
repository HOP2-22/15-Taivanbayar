import React, { useEffect, useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(false);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  useEffect(() => {
    if (count) {
      const interval = setInterval(() => {
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
      return () => clearInterval(interval);
    }
  }, [count, number, second, minute]);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <div
        className="App-header"
        style={{
          display: "flex",
          gap: "30px",
          border: "solid 1px black",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ color: "green", fontSize: "50px" }}>0</div>
        <div style={{ fontSize: "50px" }}>:</div>
        <div style={{ color: "green", fontSize: "50px" }}>{minute}</div>
        <div style={{ fontSize: "50px" }}>:</div>
        <div style={{ color: "green", fontSize: "50px" }}>{second}</div>
        <div style={{ fontSize: "50px" }}>:</div>
        <div style={{ color: "green", fontSize: "50px" }}>{number}</div>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "5%",
          }}
          onClick={() => setCount(true)}
        >
          START
        </button>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "5%",
          }}
          onClick={() => setCount(false)}
        >
          STOP
        </button>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "5%",
          }}
          onClick={() => {
            setMinute(0);
            setSecond(0);
            setNumber(0);
            setCount(0);
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default App;
