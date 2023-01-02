import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [text, setText] = useState();
  const [desc, setDesc] = useState();
  const [list, setList] = useState([]);
  console.log(list)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await axios.get("http://localhost:8600/list");
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPost();
  }, []);

  const deleteALL = async () => {
    try {
      console.log("test Delte alll");
      const res = await axios.delete("http://localhost:8600/list/delete");
      console.log(res, "delete all");
      setList([]);
    } catch (error) {
      console.log(error);
    }
  };

  const listPublisher = async () => {
    try {
      const res = await axios.post("http://localhost:8600/list", {
        text: text,
        description: desc,
      });
      const data = [...list, res.data];
      setText("");
      setDesc("");
      setList(data);
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
      <div>
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
      </div>
      <button
        style={style.inpStyle}
        onClick={() => {
          listPublisher();
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
          console.log(e);
          return (
            <List
              todo={e}
              list={list}
              setList={setList}
              text={text}
              setText={setText}
              desc={desc}
              setDesc={setDesc}
              key={index}
            />
          );
        })}
      </div>
      <button onClick={() => deleteALL()}>delete all</button>
    </div>
  );
};

const style = {
  inpStyle: {
    width: "300px",
  },
};

const List = ({ todo, list, setList, text, setText, desc, setDesc }) => {
  const updateList = async (id) => {
    setText("");
    setDesc("");
    try {
      const res = await axios.put(`http://localhost:8600/list/${id}`, {
        text: text,
        description: desc,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteList = async (id) => {
    try {
      await axios.delete(`http://localhost:8600/list/${id}`);
      const item = list.filter((i) => i._id !== id);
      setList(item);
      console.log(item);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(todo);
  return (
    <div
      style={{
        width: "1000px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div> desciption: {todo.description}</div>
      <div>text: {todo.text}</div>
      <button
        onClick={() => {
          deleteList(todo._id);
        }}
      >
        delete
      </button>
      <button
        onClick={() => {
          updateList(todo._id);
        }}
      >
        update list
      </button>
    </div>
  );
};

export default App;
