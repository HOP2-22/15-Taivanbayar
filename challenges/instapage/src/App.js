import React, { useState } from "react";
import "./App.css";

import menu from "./images/menu.png";
import pause from "./images/pause.png";
import play from "./images/play-buttton.png";
import mute from "./images/mute.png";
import story from "./images/prince.jpeg";
import avatar from "./images/princess.jpeg";

function App() {
  const [playLogo, setPlay] = useState(`${pause}`);


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
          width: "45%",
          height: "95vh",
          borderRadius: "30px",
          backgroundImage: `url(${story})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "2vh",
            width: "90%",
          }}
        >
          <div
            style={{
              background: "gray",
              width: "100%",
              borderRadius: "18px",
              height: "5px",
            }}
          >
            <div
              style={{
                animation: " process backwards  2s linear",
                width: "100%",
                height: "5px",

                borderRadius: "18px",
              }}
              className="processing-div"
            ></div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <div style={{ display: "flex", gap: "15px" }}>
            <img
              src={avatar}
              alt="something"
              style={{ width: "45px", height: "45px", borderRadius: "50%" }}
            />
            <p>taivnaa</p>
            <p>3h ago</p>
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <div
              className="playBut"
              onClick={() => {
                setPlay(playLogo === pause ? play : pause);
              }}
            >
              <img
                alt="something"
                src={playLogo}
                style={{ width: "25px", height: "25px" }}
                onClick={() => {
                  document.getElementsByClassName("processing-div")[0].style =
                    playLogo === pause
                      ? "animation-play-state: paused"
                      : "animation-play-state: running";
                }}
              />
            </div>
            <img
              alt="something"
              src={mute}
              style={{ width: "25px", height: "25px" }}
            />
            <img
              alt="something"
              src={menu}
              style={{ width: "25px", height: "25px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
