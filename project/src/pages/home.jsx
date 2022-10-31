import React from "react";
import "../components/style/style.css";
import MeetingImg from "../assets/images/meetingImg.svg";
import ParaContainer from "../components/layout/paraContainer";
import smilingWoman from "../assets/images/smilingwoman.svg";
import smilingWomanBr from "../assets/images/smilingwoman2.svg";

export const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="midContainer">
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
        </div>
      </div>
      <main>
        <div className="midTop-leftContainer">
          <h1>
            Your Hub for <br /> teamwork
          </h1>
          <ParaContainer />
        </div>
        <img src={MeetingImg} />
      </main>
      <div className="midContainer">
        <div>
          <ParaContainer />
          <img src={smilingWoman} />
        </div>
        <div>
          <ParaContainer />
          <img src={smilingWomanBr} />
        </div>
      </div>
    </div>
  );
};

export default Home;
