
// import { useEffect } from "react";
// import { useState } from "react";

// export function Ref(){
//     const [name, setName] = useState("");
//     const renderCount = useRef(0)
//     useEffect(()=>{
//     renderCount.current = renderCount.current + 1;
//     })
//     return(
//         <div>
//             <input value={name} onChange={(e)=>{
//                 setName(e.target.value);
//             }}/>
//             <div>My name is {name}</div>
//             <div>I rendered times {renderCount.current}</div>
//         </div>
//     )
// }
// export default Ref;
//useRef useEffect

// export function Input(){
//     const inputRef = useRef();

//     function focus(){
//         inputRef.current.focus();
//         console.log(inputRef.current);
//     }

//     return (
//         <div>
//             <input ref={inputRef} />
//             <button onClick={focus}>Focus</button>
//             </div>
//     );
// }
