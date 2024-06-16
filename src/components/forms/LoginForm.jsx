import React from "react";
import { useNavigate } from "react-router-dom";

import { useForm, useLogin } from "../../hooks";

import { logInValidationSchema } from "../../utils";

import lock from "/icons/lock.webp";

import { CustomInput } from "../common";
import CircularProgress from "@mui/material/CircularProgress";

export function LoginForm({ customHandleSubmit }) {
  const navigate = useNavigate();

  const { login, laoding, apiError } = useLogin();

  const { values, errors, touched, handleChange, handleSubmit } = useForm(
    {
      userId: "",
      password: "",
    },
    (values) => {
      values.password = Number(values.password);
      login(values);
    },
    logInValidationSchema
  );

  const handleSwitch = () => {
    navigate("/sign-up");
  };

  return (
    <div className="login-form d-flex">
      <p className="defaultFont">{"Login Asif"}</p>
      <form className="form" onSubmit={handleSubmit}>
        <img src={lock} className="lockIcon" />

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
          Sign Up?
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
  );
}
