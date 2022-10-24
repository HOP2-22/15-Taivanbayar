import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllUsers } from "./AllUsers";
import { Oneuser } from "./Oneuser";
const main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllUsers />} />
        <Route path="/:username" element={<Oneuser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default main;