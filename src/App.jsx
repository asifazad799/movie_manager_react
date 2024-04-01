import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import {
  Login,
  Home,
  ProtuctedRoutes,
  UnProtuctedRoutes,
  SignUp,
} from "./pages";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<UnProtuctedRoutes />}>
            <Route path="/" element={<Login />} />
            <Route path="/log-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
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
