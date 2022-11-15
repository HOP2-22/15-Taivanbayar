import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import UserShow from "./page/User";
import Layout from "./components/layout/Layout";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeContext>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<UserShow />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeContext>
  );
};

export default App;
