import React from "react";

import "../styles/login.css";

import { LoginForm, DefaultParentComp } from "../components";

export default function Login() {
  return (
    <DefaultParentComp>
      <div className="cercle"></div>
      <LoginForm />
    </DefaultParentComp>
  );
}
