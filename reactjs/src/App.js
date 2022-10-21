import React, { useState } from "react";
import "./App.css";
import { List1 } from "./components/List1";
import "./ToDo list/style.css";

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
              console.log(setList )
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
          return <List1 toDo={toDo} index={index} list={list} setList={setList}/>;
        })}
      </div>  
      <button className="but-bot" onClick={
        () => {
          setList([]);
        }
      }>Delete All
      </button>
    </div>

  );
};

export default App;
//toDo list




// const App = () => {
//   const names = ["gala", "sono", "bala"];
//   return (
//     <div className='App'>
//       <p>Hello World</p>
//       {
//         names.map((name) => {
//           return <Thought comment={name} />
//         })
//       }
//       <List />
//     </div>
//   )
// }

// export default App;








// const App = () => {
//   const names = ["gala", "sono", "bala"];
//   return (
//     <div className='App'>
//       <p>Hello World</p>
//       {
//         names.map((name) => {
//           return <Thought comment={name} />
//         })
//       }
//       <List />
//     </div>
//   )
// }

// export default App;
// //1









// const Add = () => {
//   const [number, setNumber] = useState(25);
//   return (
//     <div className="App">
//       <p>{number}</p>
//       <button
//         onClick={() => {
//           setNumber(number + 1);
//         }}
//       >
//         +
//       </button>
//       <button
//         onClick={() => {
//           setNumber(number - 1);
//         }}
//       >-</button>
//     </div>
//   );
// };

// export default Add;
