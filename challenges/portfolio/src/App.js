import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Context } from "./context/DataContext";
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
