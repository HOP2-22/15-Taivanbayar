import React, { useEffect, useState } from "react";
import "./App.css";

import menu from "./images/menu.png";
import pause from "./images/pause.png";
import play from "./images/play-buttton.png";
import mute from "./images/mute.png";
import story from "./images/prince.jpeg";
import avatar from "./images/princess.jpeg";

function App() {
  const [playLogo, setPlay] = useState(`${play}`);

  useEffect(()=> {
    
  }, [])

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
            className="processing-div"
            style={{
              width: "100%",
              height: "1vh",
              borderRadius: "5px",
            }}
          ></div>
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
              style={{ width: "45px", height: "45px", borderRadius: "50%" }}
            />
            <p>taivnaa</p>
            <p>3h ago</p>
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <div 
            className="playBut"
            onClick={()=> {
              setPlay(
              playLogo === play ? pause : play
              )
            }}>
              <img src={playLogo} style={{ width: "25px", height: "25px" }} />
            </div>
            <img src={mute} style={{ width: "25px", height: "25px" }} />
            <img src={menu} style={{ width: "25px", height: "25px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
