import React, { useEffect, useState } from "react";

const App = () => {
  const [milsecond, setMilsecond] = useState(0);
  const [second, setSecond] = useState(0);
  const [minut, setMinut] = useState(0);
  let interval;
  const Start = () => {
    interval =
      useEffect(() => {
        setInterval(() => {
          setMilsecond(milsecond + 1)
        }, 1000);
        if (milsecond === 100) setSecond(second + 1)
        if (second === 60) setMinut(minut + 1)
      }, [milsecond, second, minut])
  }
  const Stop = () => {
    clearInterval(interval)
  }


  return (
    <div className="App">
      <div className="App-header" style={{ display: "flex", gap: "30px" }}>
        <div>00</div>
        <div>:</div>
        <div>{minut}</div>
        <div>:</div>
        <div>{second}</div>
        <div>:</div>
        <div>{milsecond}</div>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <button onClick={Start()}>START</button>
        <button onClick={Stop()}>STOP</button>
        <button>RESET</button>
      </div>
    </div>
  );
};

export default App;
