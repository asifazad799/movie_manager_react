import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
            <Route path="/" element={<Login />} exact />
            <Route path="/log-in" element={<Login />} exact />
            <Route path="/sign-up" element={<SignUp />} exact />
          </Route>
          <Route element={<ProtuctedRoutes />}>
            <Route path="/home" element={<Home />} exact />
          </Route>
          <Route
            path="*"
            element={
              <div>
                <h1 style={{ color: "red" }}>No Page Found</h1>
                <button>
                  <Link to={-1}>
                    <h2>Go to back</h2>
                  </Link>
                </button>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
