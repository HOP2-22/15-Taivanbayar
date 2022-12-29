import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [desc, setDesc] = useState("");
  const [text, setText] = useState("");
  const [alldata, setAllData] = useState([])


  useEffect(() => {
    
    const fetchPost = async (req, res, next) => {
      try {
        const { data } = axios.get("http://localhost:8600/getList");
        // setAllData(data)
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPost();
  }, []);
  const postPublisher = async () => {
    try {
       const res = await axios.post("http://localhost:8600/createList", {
          text: text,
          description: desc,
        })
        const el = [...alldata, res.data];
        setAllData(el);
        console.log(alldata)
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
        style={style.inpStyle}
        placeholder="description"
        type="text"
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        style={style.inpStyle}
        placeholder="text"
        type="text"
        onChange={(el) => setText(el.target.value)}
      />
      <button
        style={style.inpStyle}
        onClick={() => {
          postPublisher();
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
        {alldata?.map((e, index) => {
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
      <button onClick={()=> {
        console.log(todo)
      }}>delete</button>
    </div>
  );
};

export default App;
