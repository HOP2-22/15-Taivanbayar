import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./page/Blogs";
import UserShow from "./page/User";
import Layout from "./components/layout/Layout";
import ThemeContext from "./context/ThemeContext";
import Home from "./page/Home";

const App = () => {
  return (
    <ThemeContext>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<UserShow />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeContext>
  );
};

export default App;
