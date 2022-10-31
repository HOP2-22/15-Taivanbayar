import React from "react";
import Data from "./data";
import FirstWoman from "../images/Ellipse.svg";
import SecondWoman from "../images/second.svg";
import Third from "../images/third.svg";
import Fourth from "../images/forth.svg";
import Seventh from "../images/prince.jpeg";

export const DataSend = () => {
  const peopleData = [
    {
      name: "Amy Klassen",
      profile: { FirstWoman },
      comment:
        "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
      starts: 5,
    },
    {
      name: "Jane Cooper",
      profile: { SecondWoman },
      comment:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      starts: 5,
    },
    {
      name: "Eleanor Pena",
      profile: { Third },
      comment:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
      starts: 5,
    },
    {
      name: "Lightnging Mcqueen",
      profile: { Fourth },
      comment:
        "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
      starts: 5,
    },
    {
      name: "Lightning Mcqueen",
      profile: { Seventh },
      comment:
        "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
      starts: 5,
    },
    {
      name: "Lightning Mcqueen",
      profile: { Seventh },
      comment:
        "Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.",
      starts: 5,
    },
  ];

  return (
    <div>
      {peopleData.map((data) => {
        return (
          <Data
            surname={data.name}
            starNum={data.stars}
            comment={data.comment}
            profile={data.profile}
          />
        );
      })}
    </div>
  );
};

export default DataSend;
