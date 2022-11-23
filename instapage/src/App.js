import React from "react";
import menu  from "./images/menu.png"
import pause from "./images/pause.png"
import play from "./images/play-button.png"
import mute from "./images/mute.png"

function App() {
  return (
    <div
      className="App"
      style={{
        width: "100%",
        height: "100vh",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "30%",
          height: "95vh",
          borderRadius: "30px",
          backgroundImage: "white",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "1vh",
            borderRadius: "5px",
            background: "blue",
          }}
        ></div>
        <div>
          <div>
            <img />
            <p></p>
          </div>
          <div>
            <img src={play}/>
            <img src={mute}/>
            <img src={menu}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
