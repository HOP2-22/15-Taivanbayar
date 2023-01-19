import { useEffect, useState } from "react";
import axios from "axios";
import Ref from "./component/ref";

const App = () => {
//   const [text, setText] = useState("");
//   const [desc, setDesc] = useState("");

//   const [list, setList] = useState([]);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:8600/list");
//         console.log(data);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     fetchPost();
//   }, []);

//   const deleteALL = async () => {
//     try {
//       await axios.delete("http://localhost:8600/list/delete");
//       setList([]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const listPublisher = async () => {
//     try {
//       const res = await axios.post("http://localhost:8600/list", {
//         text: text,
//         description: desc,
//       });
//       const data = [...list, res.data];
//       setText("");
//       setDesc("");
//       setList(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <div>
//         <input
//           value={desc}
//           style={style.inpStyle}
//           placeholder="description"
//           type="text"
//           onChange={(e) => setDesc(e.target.value)}
//         />
//         <input
//           value={text}
//           style={style.inpStyle}
//           placeholder="text"
//           type="text"
//           onChange={(el) => setText(el.target.value)}
//         />
//       </div>
//       <button
//         style={style.inpStyle}
//         onClick={() => {
//           listPublisher();
//         }}
//       >
//         publish
//       </button>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         {list?.map((e, index) => {
//           return <List todo={e} list={list} setList={setList} key={index} />;
//         })}
//       </div>
//       <button onClick={() => deleteALL()}>delete all</button>
//     </div>
//   );
// };

// const style = {
//   inpStyle: {
//     width: "300px",
//   },
// };

// const List = ({ todo, list, setList }) => {
//   const [isEdited, setIsEdited] = useState(false);
//   const [newText, setNewText] = useState(todo.text);
//   const [newDesc, setNewDesc] = useState(todo.description);

//   const deleteList = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8600/list/${id}`);
//       const item = list.filter((i) => i._id !== id);
//       setList(item);
//       console.log(item);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const updateList = async (id) => {
//     await axios
//       .put(`http://localhost:8600/list/${id}`, {
//         text: newText,
//         description: newDesc,
//       })
//       .then((response) => {
//         console.log(response);
//         setNewDesc(response.data.message.description);
//         setNewText(response.data.message.text);
//       });
//     setIsEdited(false);
//   };

//   if (isEdited) {
//     return (
//       <div
//         style={{
//           width: "1000px",
//           display: "flex",
//           justifyContent: "space-around",
//         }}
//       >
//         description:
//         <input value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
//         text:
//         <input value={newText} onChange={(e) => setNewText(e.target.value)} />
//         <button onClick={() => updateList(todo._id)}>save</button>
//       </div>
//     );
//   } else {
//     return (
//       <div
//         style={{
//           width: "1000px",
//           display: "flex",
//           justifyContent: "space-around",
//         }}
//       >
//         <div> desciption: {newDesc}</div>
//         <div>text: {newText}</div>
//         <button
//           onClick={() => {
//             deleteList(todo._id);
//           }}
//         >
//           delete
//         </button>
//         <button
//           onClick={() => {
//             setIsEdited(true);
//           }}
//         >
//           update list
//         </button>
//       </div>
//     );
//   }
return <div>
  <Ref />
</div>
};

export default App;
