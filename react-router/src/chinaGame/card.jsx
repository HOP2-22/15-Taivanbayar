import { useState } from "react";
import React from "react";

export const Card = () => {
  const [choose, setChoose] = useState();
  const words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  return (
    <div className="Card">
      <div 
      onClick={()=>{
        words.filter((word)=>{
            return <div style={{transform:'scale(1.5x)'}}>{word}</div>
        })
      }
    }
      style={{display:"flex", gap:"10px"}}>
        {words.map((word, index) => {
          return (
            <div
              style={{
                width: "50px",
                height: "60px",
                fontSize: "30px",
                display: "flex",
                justifyContent:"center",
                alignContent: "center",
                border:"1px solid black",
                transition:"1s"
              }}
            >
              {word}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
