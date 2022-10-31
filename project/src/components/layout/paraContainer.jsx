import React from "react";
import { Link } from "react-router-dom"

export const ParaContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
        height: "40vh",
        justifyContent: "center",
        alignItems: "center",
        margin: " 345px 140px",
      }}
    >
      <p
        style={{
          fontFamily: "Mulish",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "18px",
        }}
      >
        Give everyone you work with—inside and outside your company—a more
        productive way to stay in sync. Respond faster with emoji, keep
        conversations focused in channels, and simplify all your communication
        into one place.
      </p>
      <Link style={{ color: "#4DA0FD" }}>Learn more ☞</Link>
    </div>
  );
};

export default ParaContainer;
