import React from "react";
import { Link } from "react-router-dom";
import "./react-routerChallenge/style.css";
export const App = () => {
  return (
      <div className="container">
        <nav>
          <div className="nav-left">
            <Link className="top-logo" to="HomePage">
              team
            </Link>
            <div className="top-rec"></div>
          </div>
          <div className="top-right">
            <Link className="linked-navs" to="Products">
              Products
            </Link>
            <Link className="linked-navs" to="ServicePage">
              Services
            </Link>
            <Link className="linked-navs" to="/ContactPage">
              Contact
            </Link>
            <Link className="linked-navs" to="LoginPage">
              Log in
            </Link>
            <Link className="spe-trt">Get Access</Link>
          </div>
        </nav>

        <main>
          <article>
            Instant collaborations <br />
            for remote teams
          </article>
          <section>
            All in one for your remote team chats,
            <br /> collaboration and track projects
          </section>
          <div className="main-top">
            <input placeholder="Email" />
            <button className="but-bot">Get early access</button>
          </div>
        </main>
      </div>
  );
};

export default App;
