import React, { useState } from "react";
import { MyButton } from "./stopwatch/task";

const App = () => {
  const [time, setTime] = useState(0);
  const [second, setSecond] = useState(0);
  const Start = () => {
    setInterval(() => {
      setTime(time + 1);
    }, 10);
    if (time === 1000) {
      setSecond(() => {
        second++;
      });
    }
  };

  return (
    <div className="App">
      <div className="App-header" style={{ display: "flex", gap: "30px" }}>
        <div>00</div>
        <div>:</div>
        <div>00</div>
        <div>:</div>
        <div>{second}</div>
        <div>:</div>
        <div>{time}</div>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <button onClick={Start()}>START</button>
        <button>STOP</button>
        <button>RESET</button>
      </div>
    </div>
  );
};

export default App;
