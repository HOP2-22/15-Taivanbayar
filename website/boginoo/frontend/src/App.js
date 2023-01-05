import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Client } from "./components/Client";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login/Login";
import { ForgotPass } from "./pages/Login/ForgotPass";
import { SignUp } from "./pages/Login/SignUp";

function App() {
  document.title = "Boginoo";
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Client />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/forgotpass" element={<ForgotPass />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
