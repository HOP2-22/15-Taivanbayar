import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "./context/DataContext";
import { Layout } from "./layout/layout";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Context>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Context>
    </BrowserRouter>
  );
};

export default App;
