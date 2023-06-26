import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layouts from "./components/Master";
import About from "./components/About";
import Home from "./components/Home";
import Shop from "./components/Shops";
import Detail from "./components/Detail";
import New from "./components/crud/New";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index  element={<Home />} />
          <Route path="home"  element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} /> 
          <Route path="shop/:id" element={<Detail />} /> 
          <Route path="shop/edit/:id" element={<Detail/>} /> 
          <Route path="create" element={<New/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
