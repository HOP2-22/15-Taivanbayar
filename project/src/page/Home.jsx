import React, { useContext } from "react";
import "../components/style/style.css";
import MeetingImg from "../assets/images/meetingImg.svg";
import smilingWoman from "../assets/images/smilingwoman.svg";
import smilingWomanBr from "../assets/images/smilingwoman2.svg";
import { CompMid } from "../components/MidPosts";
import AllPeopleData from "../assets/Data/peopleData";
import { Data } from "../assets/Data/dataPrint";
import { ColorModeContext } from "../context/ThemeContext";

const Home = () => {
  const { theme, color } = useContext(ColorModeContext);
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "200px",
          background: theme,
        }}
      >
        <CompMid
          image={MeetingImg}
          topic={"Your Hub for teamwork"}
          marginAll={null}
        />
        <CompMid
          isReversed={false}
          image={smilingWoman}
          topic={"Simple task management"}
          imageSize={false}
          marginAll={true}
        />
        <CompMid
          image={smilingWomanBr}
          topic={"Scheduling that actually works"}
          marginRight={false}
          imageSize={false}
          marginAll={false}
        />

        <div className="main-end">
          <h1
            style={{
              fontFamily: "Mulish",
              fontWeight: "800",
              fontSize: "48px",
              color: color,
            }}
          >
            What people say about us
          </h1>
          <div className="main-end-comment">
            {AllPeopleData.map((data) => {
              return (
                <Data
                  surname={data.name}
                  starNum={data?.stars}
                  comment={data.comment}
                  profile={data.profile}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
