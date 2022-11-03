import React from "react";

export const Data = (props) => {
  const { surname, starNum, comment, profile } = props;
  console.log("star:", props);
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        width: "400px",
        height: "260px",
        flexDirection: "column",
        backgroundColor: "white",
        justifyContent: "center",
        alignContent: "center",
        padding:"42px",
        boxShadow: '2px 3px 21px -1px  rgba(0,0,0,0.75)'  ,

      }}
    >
      <div style={{ width: "15px", height: "15px", display: "flex" }}>
        {Array(starNum && starNum)
          .fill("⭐")
          .map((element, index) => {
            return (
              <div key={index}>
                {element}
              </div>
            );
          })}
      </div>
      <p
        style={{
          fontFamily: "Mulish",
          fontWeight: "500",
          fontSize: "18px",
          width: "250px",
          height:"100px"
        }}
      >
        {comment}
      </p>
      <div
        style={{
          display: "flex",
          marginTop: "40px",
          gap: "20px",
        }}
      >
        <img style={{ width: "30px", height: "30px" }} src={profile} />
        <h3
          style={{
            fontFamily: "Mulish",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "29px",
            marginTop:"-2px"
          }}
        >
          {surname}
        </h3>
      </div>
    </div>
  );
};

export default Data;
