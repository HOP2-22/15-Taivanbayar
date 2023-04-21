import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Blog from "./page/Blogs";
import UserShow from "./page/User";
import Home from "./page/Home";
import { Contact } from "./page/Contact";
import { Products } from "./page/Products";
import { Login } from "./page/LogIn";

import Layout from "./components/layout/Layout";

import ThemeContext from "./context/ThemeContext";
import LocomotiveScrollContext, { Locomotive } from "./context/Locomotive";

const App = () => {
  document.title = "Blog Post";
  return (
    <LocomotiveScrollContext>
      <ThemeContext>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<UserShow />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeContext>
    </LocomotiveScrollContext>
  );
};

export default App;
