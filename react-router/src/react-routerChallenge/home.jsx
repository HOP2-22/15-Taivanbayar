import React from "react";
import { Link } from "react-router-dom";
import backImg from "./backImg.jpg";
import "./style.css"

export const Home = () => {
  return (
    <div className="container">
      <nav>
        <div className="nav-left">
          <Link className="top-logo">team</Link>
          <div className="top-rec"></div>
        </div>
        <div className="top-right">
          <Link className="linked-navs">Products</Link>
          <Link className="linked-navs">Services</Link>
          <Link className="linked-navs">Contact</Link>
          <Link className="linked-navs">Log in</Link>
          <Link className="spe-trt">Get Access</Link>
        </div>
      </nav>

      <main>
        <article >
          Instant collaborations <br />
          for remote teams
        </article>
        <section >
          All in one for your remote team chats,
          <br /> collaboration and track
          projects
        </section>
        <div className="main-top">
          <input placeholder="Email" />
          <button className="but-bot">Get early access</button>
        </div>
      </main>
    </div>
  );
};


export default Home;
