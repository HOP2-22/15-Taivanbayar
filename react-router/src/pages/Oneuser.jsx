import React from "react";
import { Link, useParams } from "react-router-dom";

export const Oneuser = () => {
  const { username } = useParams();
     return <h1>name is {username}</h1>
};

export default Oneuser
