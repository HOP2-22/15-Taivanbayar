import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beginning } from "./pages/Beginning";
import { Game } from "./pages/Game";

const App = () => {
  document.title="Whac a Mole!"
  return(
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Beginning />}/> */}
      <Route path="/" element={<Game />}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;
