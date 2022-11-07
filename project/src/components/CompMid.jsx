import React from "react";
import { Link } from "react-router-dom";
export const CompMid = ({
  isReversed = true,
  image,
  topic,
  marginRight = true,
  imageSize = true,
  marginAll,
}) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        marginTop: "120px",
        display: "flex",
        flexDirection: !isReversed ? "row" : "row-reverse",
        alignItems: "center",
        gap: "40px",
      }}
    >
      <img
        src={image}
        style={{
          width: !imageSize ? "900px" : "1000px",
          marginRight: !marginRight ? "100px" : "0",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          gap:"30px"
        }}
      >
        <h1
          style={{
            fontFamily: "Mulish",
            fontWeight: "800",
            fontSize: "70px",
          }}
        >
          {topic}
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Mulish",
              fontWeight: "400",
              fontSize: "40px",
              marginTop:"-30px"
              }}
          >
            Give everyone you work with—inside and outside your   <br />company—a more
            productive way
            to stay in sync.  <br /> Respond faster with emoji, keep conversations
            focused  <br /> in channels, and simplify all your communication into
            <br /> one place.
          </p>
        </div>
        <Link style={{ color: "#4DA0FD" }}>Learn more ☞</Link>
      </div>
    </div>
  );
};
