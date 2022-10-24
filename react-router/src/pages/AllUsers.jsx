import React from "react";
import { useState } from "react";
import UserPrint from "./UserProfile";
import users from "../users.json";
import Oneuser from "./Oneuser";

export const AllUsers = () => {
  const [output, setOutput] = useState(users);

  const search = (val) => {
    setOutput(() => {
      return users.filter((user) => {
        return user.username.toLowerCase().includes(val.toLowerCase());
      });
    });
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <input
        type={"search"}
        style={{ width: "500px" }}
        onChange={(e) => {
          e.preventDefault();
          search(e.target.value);
        }}
      ></input>
      {output.length === 0 && <h1>No Users Found`</h1>}
      {output.map((userData, index) => {
        return (
          <div>
            <UserPrint userData={userData} key={index} />
          </div>
        );
      })}
    </div>
  );
};
