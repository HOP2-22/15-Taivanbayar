import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home"
import UserShow from "./page/User";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/user" element={<UserShow />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;