import React from "react";
import CustomInput from "../components/CustomInput";
import lock from "../assets/icons/lock.webp";
import { useForm } from "../hooks/useForms";
import { logInValidationSchema } from "../utils/formValidationSchema";

function LoginForm({ customHandleSubmit }) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = useForm(
    {
      userId: "",
      password: "",
    },
    // test
    (values) => {
      customHandleSubmit(values);
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
        <button type="submit" className="loginBtn">
          <p className="defaultFontFam confirmTxt">Confirm</p>
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
