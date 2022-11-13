import { Container } from "@mui/system";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./page/Home";
import UserShow from "./page/User";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserShow />} />
          </Routes>
        </Layout>
      </Container>
    </BrowserRouter>
  );
};

export default App;
