import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [text, setText] = useState();
  const [desc, setDesc] = useState();
  const [list, setList] = useState([]);


  // useEffect(() => {

  //   const fetchPost = async (req, res, next) => {
  //     try {
  //       const { data } = axios.get("http://localhost:8600/getList");
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchPost();
  // }, []);

  const postPublisher = async () => {
    try {
      const res = await axios.post("http://localhost:8600/createList", {
        text: list.map((e)=> e.text),
        description: list.map((e)=> e.desc),
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input
        value={desc}
        style={style.inpStyle}
        placeholder="description"
        type="text"
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        value={text}
        style={style.inpStyle}
        placeholder="text"
        type="text"
        onChange={(el) => setText(el.target.value)}
      />
      <button
        style={style.inpStyle}
        onClick={() => {
          postPublisher();
          setList(...list, desc);
          console.log(list);
        }}
      >
        publish
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {list?.map((e, index) => {
          return <List key={index} todo={e} />;
        })}
      </div>
    </div>
  );
};

const style = {
  inpStyle: {
    width: "300px",
  },
};

const List = ({ todo }) => {
  const updateList = (req, res) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        width: "1000px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div> desciption: {todo.desc}</div>
      <div>text: {todo.text}</div>
      <button
        onClick={() => {
          console.log(todo);
        }}
      >
        delete
      </button>
      <button
        onClick={() => {
          updateList();
        }}
      >
        update list
      </button>
    </div>
  );
};

export default App;
