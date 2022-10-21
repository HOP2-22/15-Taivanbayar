import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { AllUsers } from "./pages/AllUsers";
import { Oneuser } from "./pages/Oneuser";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllUsers />} />
        <Route path="/:username" element={<Oneuser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
