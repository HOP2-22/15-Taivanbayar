// import React from "react";
// import { Link } from "react-router-dom";
// import "./react-routerChallenge/style.css";
// export const App = () => {
//   return (
//       <div className="container">
//         <nav>
//           <div className="nav-left">
//             <Link className="top-logo" to="HomePage">
//               team
//             </Link>
//             <div className="top-rec"></div>
//           </div>
//           <div className="top-right">
//             <Link className="linked-navs" to="Products">
//               Products
//             </Link>
//             <Link className="linked-navs" to="ServicePage">
//               Services
//             </Link>
//             <Link className="linked-navs" to="/ContactPage">
//               Contact
//             </Link>
//             <Link className="linked-navs" to="LoginPage">
//               Log in
//             </Link>
//             <Link className="spe-trt">Get Access</Link>
//           </div>
//         </nav>

//         <main>
//           <article>
//             Instant collaborations <br />
//             for remote teams
//           </article>
//           <section>
//             All in one for your remote team chats,
//             <br /> collaboration and track projects
//           </section>
//           <div className="main-top">
//             <input placeholder="Email" />
//             <button className="but-bot">Get early access</button>
//           </div>
//         </main>
//       </div>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { AllUsers } from "./pages/AllUsers";
// import { Oneuser } from "./pages/Oneuser";
// const main = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<AllUsers />} />
//         <Route path="/:username" element={<Oneuser />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default main;

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
