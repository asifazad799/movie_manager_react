import React from "react";
import { useNavigate } from "react-router-dom";

import { useForm, useSignUp } from "../hooks";
import { logInValidationSchema } from "../utils";

import "../styles/login.css";

import lock from "../assets/icons/lock.webp";

import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { CustomInput, DefaultParentComp } from "../components";

export function SignUp() {
  const navigate = useNavigate();
  const { signUpCall, res, laoding, apiError } = useSignUp();

  const { values, errors, touched, handleChange, handleSubmit } = useForm(
    {
      userId: "",
      password: "",
    },
    (values) => {
      values.password = Number(values.password);
      signUpCall(values);
    },
    logInValidationSchema
  );

  const handleSwitch = () => {
    navigate("/log-in");
  };

  return (
    <DefaultParentComp>
      <div className="login-form d-flex">
        <p className="defaultFont">Sign Up</p>
        <form className="form" onSubmit={handleSubmit}>
          {res == 200 ? (
            <Alert style={{ width: "100%" }} severity="success">
              Your user created
            </Alert>
          ) : (
            <img src={lock} className="lockIcon" />
          )}

          <CustomInput
            fullWidth
            variant="outlined"
            id="userId"
            name="userId"
            autoComplete="userId"
            autoFocus
            error={touched.userId && Boolean(errors.userId)}
            helperText={touched.userId && errors.userId}
            value={values.userId}
            onChange={handleChange}
            title={"User Id"}
          />
          <CustomInput
            fullWidth
            id="password"
            name="password"
            autoComplete="password"
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            value={values.password}
            onChange={handleChange}
            title={"Password"}
          />
          <p className="defaultFontFam text2" onClick={handleSwitch}>
            Log In?
          </p>
          <div style={{ width: "100%" }}>
            {apiError && <p className="defaultFontFam errorTxt">{apiError}</p>}
            {laoding && <CircularProgress color="success" />}
            <button type="submit" className="loginBtn">
              <p className="defaultFontFam confirmTxt">Confirm</p>
            </button>
          </div>
        </form>
      </div>
    </DefaultParentComp>
  );
}
