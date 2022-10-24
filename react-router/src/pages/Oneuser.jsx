import React, { useState } from "react";
import { useParams } from "react-router-dom";
import users from "../users.json";

const style = {
  text:{
    color: "white",
    fontSize: "20px",
    fontWeight: "bold"
  }
}



export const Oneuser = ({ userData }) => {
  const { username } = useParams();
  const user = users.find((user) => {
    return username === user.username;
  });
  console.log(user);
  return (
    <div
      style={{
  
        width: "100%",
        height:"70vh",
        display:"flex",
        justifyContent: "center",
      }}
      >
      <div style={{
        marginTop: "70px",    
        width:"70%",
        height:"70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border:"solid 3px black",
        borderRadius: "5%",
        backgroundColor:"#b33c00"
      }}>

      <h1 style={{color:"white"}} >name: {username}</h1>
      <div style={{width:"500px", border:"solid 5px #800000", borderRadius:"5%"}}><img style={{ width: "500px" }} src={user.avatar} alt="pro" /></div>
      <p style={style.text} >City: {user.address.city}</p>
      <p style={style.text} >Gender: {user.gender}</p>

      </div>
    </div>
  );
};

export default Oneuser;
