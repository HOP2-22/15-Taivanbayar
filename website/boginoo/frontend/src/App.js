import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Home } from "./pages/Home";

function App() {
  document.title = "Boginoo";
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element />
          <Route />
          <Route />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
