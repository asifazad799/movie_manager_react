import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SamplePage from "./pages/SamplePage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtuctedRoutes from "./pages/ProtuctedRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route element={<ProtuctedRoutes />}> */}
          <Route path="/home" element={<Home />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
