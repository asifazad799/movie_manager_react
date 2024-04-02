import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
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
      <ToastContainer />
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
