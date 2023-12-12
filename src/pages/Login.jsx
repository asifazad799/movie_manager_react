import React from "react";
import BluredPloygons from "../components/BluredPloygons";
import "../styles/login.css";
import LoginForm from "../components/LoginForm";
import DefaultParentComp from "../components/DefaultParentComp";

function Login() {
  return (
    <DefaultParentComp>
      <div className="cercle"></div>
      <LoginForm />
    </DefaultParentComp>
  );
}

export default Login;
