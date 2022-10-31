import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout  from './components/layout/Layout';
import Home from "./pages/home"
import Main from "./pages/main"

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<Main />}/> */}
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
