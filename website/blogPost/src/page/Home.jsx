import React, { useContext } from "react";
import "../components/style/style.css";
import MeetingImg from "../assets/images/meetingImg.svg";
import smilingWoman from "../assets/images/smilingwoman.svg";
import smilingWoman2 from "../assets/images/smilingwoman2.svg";
import BackImg from "../assets/images/backImg.png";
import { MidPosts } from "../components/MidPosts";
import AllPeopleData from "../assets/Data/peopleData";
import { Data } from "../assets/Data/dataPrint";
import { ColorModeContext } from "../context/ThemeContext";
import { Box, Container } from "@mui/material";

const Home = () => {
  const { theme, color } = useContext(ColorModeContext);
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${BackImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "25vh",
              gap: "10vh",
            }}
          >
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
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          background: theme,
          gap: "3vh",
          width: "100%",
        }}
      >
        <MidPosts image={MeetingImg} topic={"Your Hub for teamwork"} />
        <MidPosts
          isReversed={false}
          image={smilingWoman}
          topic={"Simple task management"}
        />
        <MidPosts
          image={smilingWoman2}
          topic={"Scheduling that actually works"}
        />

        <Box className="main-end">
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
            {AllPeopleData.map((data, index) => {
              return (
                <Data
                  key={index}
                  surname={data.name}
                  starNum={data?.stars}
                  comment={data.comment}
                  profile={data.profile}
                />
              );
            })}
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
