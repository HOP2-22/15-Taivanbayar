import React from "react";
import "../components/style/style.css";
import MeetingImg from "../assets/images/meetingImg.svg";
import ParaContainer from "../components/layout/ParaContainer";
import smilingWoman from "../assets/images/smilingwoman.svg";
import smilingWomanBr from "../assets/images/smilingwoman2.svg";
import logo1 from "../assets/images/instaImg.svg";
import logo2 from "../assets/images/fbImg.svg";
import logo3 from "../assets/images/twitterImg.svg";
import InputLogo from "../assets/images/rightArrow.svg";

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
        <div className="mid-infos">
          <ParaContainer />
          <img src={smilingWoman} />
        </div>
        <div className="mid-infos">
          <ParaContainer />;
          <img src={smilingWomanBr} />
        </div>
      </div>

      <div className="main-end">
        <h1>What people say about us</h1>
        {/* <PeopleComment /> */}
      </div>

      <div className="footer">
        <div className="footer-top-left">
          <div className="footer-logo">
            <div className="logo-name">team</div>
            <div className="blue-dot2"></div>
          </div>
          <div className="footer-bot-left">
            <div className="linked-sources">
              <img src={logo1}/>
              <p className="source">Instagram</p>
            </div>
            <div className="linked-sources">
              <img src={logo2}/>
              <p className="source">Facebook</p>
            </div>
            <div className="linked-sources">
              <img src={logo3}/>
              <p className="source">Twitter</p>
            </div>
            <div className="linked-sources">
              <img src={logo1}/>
              <p className="source">Instagram</p>
            </div>
            <div className="linked-sources">
              <img src={logo2}/>
              <p className="source">Facebook</p>
            </div>
            <div className="linked-sources">
              <img src={logo3}/>
              <p className="source">Twitter</p>
            </div>
          </div>
        </div>
        <div className="footer-mid">

        <div className="footer-mid-style">
          <p className="ending-words">Use Cases</p>
          <div>
            <p className="ending-words">UI Design</p>
            <p className="ending-words">UX Design</p>
            <p className="ending-words">Prototyping</p>
            <p className="ending-words">UI Design</p>
            <p className="ending-words">UX Design</p>
            <p className="ending-words">Prototyping</p>
          </div>
        </div>
        <div className="footer-mid-style">
          <p className="ending-words">Explore</p>
          <div>
            <p className="ending-words">Figma</p>
            <p className="ending-words">Customers</p>
            <p className="ending-words">Why I Love Figma</p>
            <p className="ending-words">Figma</p>
            <p className="ending-words">Customers</p>
            <p className="ending-words">Why I Love Figma</p>
          </div>
        </div>
        <div className="footer-mid-style">
          <p className="ending-words">Resources</p>
          <div>
            <p className="ending-words">Community Resources Hub</p>
            <p className="ending-words">Support</p>
            <p className="ending-words">Education</p>
            <p className="ending-words">Community Resources Hub</p>
            <p className="ending-words">Support</p>
            <p className="ending-words" >Education</p>
          </div>
        </div>
        </div>
        <div className="footer-input">
          <p>Subscribe to our newsletter</p>
          <div className="input-arrow">
          <input type={"text"} placeholder="Email"/>
          <img src={InputLogo}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
