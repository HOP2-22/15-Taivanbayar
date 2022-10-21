import React, { useState } from "react";
import Trash from "../ToDo list/trash-bin.png";
export const List1 = ({ toDo, index, list, setList }) => {
  const [check, setCheck] = useState();
  const Delete = (idx) => {
    setList(
      list.filter((fa, index) => {
        console.log(fa, index);
        return index !== idx;
      })
    );
  };
  return (
    <p>
      <div className="tables">
        <input
          className="inp-top"
          type={"checkbox"}
          onClick={(e) => setCheck(e.target.checked)}
        />    
        <div style={{ textDecoration: check ? "line-through" : "none" }}>
          {toDo}
        </div>
        <img src={Trash} onClick={() => Delete(index)}></img>
      </div>
        {/* <div className="words">
          {
            setInterval
          }
          <div>YOU CAN DO IT</div>
          <div>KEEP GOING</div>
          <div>STAY POWERPUL</div>
          <div>BE PATIENT</div>
        </div> */}
    </p>
  );
};
//useState