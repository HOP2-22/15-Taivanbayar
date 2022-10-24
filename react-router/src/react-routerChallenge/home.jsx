import React from "react";
import { Link } from "react-router-dom";
import backImg from "./backImg.jpg";

const style = {
  containerImg: {
    backgroundImage: `url(${backImg})`,
    width: "100vw",
    height: "100vh  ",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  nav: {
    display: "flex",
    justifyContent: "space-around",
    margintTop: "10px",
    alignItems: "center",
  },
  links: {
    textDecoration: "none",
    color: "white",
    width: "60px",
  },
  logo: {
    fontFamily: "Mulish",
    color: "white",
    fontWeight: "800",
    fontSize: "40px",
    alignItems: "center",
    textAlign: "center",
    marginLeft: "-20%",
  },
  navLeft: {
    display: "flex",
    gap: "10%",
    marginRight: "-20%",
  },
  butTop: {
    width: "200px",
    height: "60%",
    opacity: "0.52",
    backgroundColor: "none",
    border: "solid 3px white",
  },
};

export const Home = () => {
  return (
    <div className="container" style={style.containerImg}>
      <div style={style.nav}>
        <p style={style.logo}>team</p>
        <div style={style.navLeft}>
          <Link style={style.links}>Products</Link>
          <Link style={style.links}>Services</Link>
          <Link style={style.links}>Contact</Link>
          <Link style={style.links}>Log in</Link>
          <button style={style.butTop}>Get Access</button>
        </div>
      </div>
      <main>
        <article style={style.article}>
          Instant collaborations for remote teams
        </article>
        <section style={style.section}>
          All in one for your remote team chats, collaboration and track
          projects
        </section>
        <div>
          <input placeholder="Email" />
          <button>Get early access</button>
        </div>
      </main>
    </div>
  );
};
