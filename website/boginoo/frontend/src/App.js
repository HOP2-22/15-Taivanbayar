import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Client } from "./pages/Client";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login/Login";

function App() {
  document.title = "Boginoo";
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element />
          <Route path="/:id" element={<Client />}/>
          <Route path="/login" element={<Login />}/>
          <Route />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
