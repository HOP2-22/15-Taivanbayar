import React, { useEffect, useState } from "react";
import "./App.css";
import { List1 } from "./components/List1";
import "./ToDo list/style.css";
import axios from "axios";

const App = () => {
  const [list, setList] = useState([]);
  const [inpValue, setInpValue] = useState("");

  return (
    <div className="container">
      <h1 className="caption">ToDo List</h1>
      <div head>
        <input
          placeholder="New Task"
          className="search-inp"
          type={"search"}
          value={inpValue}
          onChange={(e) => {
            e.preventDefault();
            setInpValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setList([...list, inpValue]);
            }
          }}
        />
        <button
          className="but-right"
          onClick={() => {
            setList([...list, inpValue]);
          }}
        >
          Add
        </button>
      </div>
      <div className="fle">
        {list.map((toDo, index) => {
          return (
            <List1
              toDo={toDo}
              index={index}
              list={list}
              setList={setList}
              key={index}
            />
          );
        })}
      </div>
      <button
        className="but-bot"
        onClick={() => {
          setList([]);
        }}
      >
        Delete All
      </button>
    </div>
  );
};


export default App;
