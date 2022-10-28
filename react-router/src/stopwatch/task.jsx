
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
    <div className="">
      <div className="App-header" style={{ display: "flex", gap: "30px" }}>
        <div>0</div>
        <div>:</div>
        <div>{minute}</div>
        <div>:</div>
        <div>{second}</div>
        <div>:</div>
        <div>{number}</div>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <button onClick={() => setCount(true)}>START</button>
        <button onClick={() => setCount(false)}>STOP</button>
        <button
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
