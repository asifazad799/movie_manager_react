import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtuctedRoutes from "./pages/ProtuctedRoutes";
import UnProtuctedRoutes from "./pages/UnProtuctedRoutes";

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<UnProtuctedRoutes />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<ProtuctedRoutes />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
