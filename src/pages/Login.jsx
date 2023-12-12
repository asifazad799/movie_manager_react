import React from "react";
import BluredPloygons from "../components/BluredPloygons";
import "../styles/login.css";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="d-flex justify-center align-center login-page">
      <div className="polygon1">
        <BluredPloygons />
      </div>
      <div className="polygon2">
        <BluredPloygons />
      </div>
      <div className="cercle"></div>
      <LoginForm />
    </div>
  );
}

export default Login;
