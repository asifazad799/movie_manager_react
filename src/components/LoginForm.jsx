import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import lock from "../assets/icons/lock.webp";
import { useForm } from "../hooks/useForms";
import { logInValidationSchema } from "../utils/formValidationSchema";
import useLogin from "../hooks/useLogin";
import CircularProgress from "@mui/material/CircularProgress";

function LoginForm({ customHandleSubmit }) {
  const [apiError, setApiError] = useState("");
  const { login, laoding } = useLogin({ setApiError });

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

  return (
    <div className="login-form d-flex">
      <p className="defaultFont">Log In</p>
      <form className="form" onSubmit={handleSubmit}>
        <img src={lock} className="lockIcon" />
        <CustomInput
          fullWidth
          variant="outlined"
          id="userId"
          //   label="User Id"
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
          //   variant="outlined"
          id="password"
          //   label="User Id"
          name="password"
          autoComplete="password"
          autoFocus
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          value={values.password}
          onChange={handleChange}
          title={"Password"}
        />
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

export default LoginForm;
