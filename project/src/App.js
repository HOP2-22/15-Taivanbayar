import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout  from './components/layout/Layout';
import Home from "./pages/home"

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
