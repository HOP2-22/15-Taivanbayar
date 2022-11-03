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
        gap: "100px",
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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Mulish",
            fontWeight: "800",
            fontSize: "48px",
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
            marginRight:
              (marginAll == null && "10px") ||
              (marginAll == true && "20px") ||
              marginAll == false
                ? "30px"
                : "0px",
          }}
        >
          <p
            style={{
              fontFamily: "Mulish",
              fontWeight: "500",
              fontSize: "18px",
              width: "60%",
              lineHeight: "30px",
            }}
          >
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji,
            keep conversations focused <br /> in channels, and simplify all your
            communication into <br /> one place.
          </p>
          <Link style={{ color: "#4DA0FD" }}>Learn more ☞</Link>
        </div>
      </div>
    </div>
  );
};
