import React from "react";

export const Data = (props) => {
  const { surname, starNum, comment, profile } = props;
    const star = ["⭐", "⭐", "⭐", "⭐", "⭐"];
    star.length = starNum;

  return (
    <div>
      <div style={{ width: "15px", height: "15px" }}>
        {star.map((element, index) => {
          return <div key={index}>{element}</div>;
        })}
      </div>
      <p>{comment}</p>
      <div>
        <img style={{ width: "30px", height: "30px" }} src={profile} />
        <div>{surname}</div>
      </div>
    </div>
  );
};

export default Data;
