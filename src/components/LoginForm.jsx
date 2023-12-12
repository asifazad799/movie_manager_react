import React from "react";
import CustomInput from "../components/CustomInput";
import lock from "../assets/icons/lock.webp";

function LoginForm() {
  return (
    <div className="login-form d-flex">
      <p className="defaultFont">Log In</p>
      <form className="form">
        <img src={lock} className="lockIcon" />
        <CustomInput title={"User Id"} />
        <CustomInput title={"Password"} />
        <button type="submit" className="loginBtn">
          <p className="defaultFontFam confirmTxt">Confirm</p>
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
