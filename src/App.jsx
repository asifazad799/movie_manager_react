import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import CacheBuster from "react-cache-buster";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import {
  // Login,
  // Home,
  ProtuctedRoutes,
  UnProtuctedRoutes,
  SignUp,
} from "./pages";
// import { version } from "../package.json";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    // <CacheBuster
    //   currentVersion={version}
    //   isEnabled={true} //If false, the library is disabled.
    //   isVerboseMode={false} //If true, the library writes verbose logs to console.
    //   loadingComponent={
    //     <div>
    //       <h1 style={{ color: "black" }}>Loading...</h1>
    //     </div>
    //   } //If not pass, nothing appears at the time of new version check.
    //   metaFileDirectory={"."} //If public assets are hosted somewhere other than root on your server.
    // >
    <div className="app">
      <ToastContainer />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </BrowserRouter>
    </div>
    // </CacheBuster>
  );
}

export default App;
