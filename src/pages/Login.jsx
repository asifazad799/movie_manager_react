import React from "react";

import "../styles/login.css";

import { LoginForm, DefaultParentComp } from "../components";

export function Login() {
  return (
    <DefaultParentComp>
      <div className="cercle"></div>
      <LoginForm />
    </DefaultParentComp>
  );
}
