import * as Yup from "yup";
import { requiredTXT } from "./constnds";

let userId = Yup.string().required(requiredTXT);
let password = Yup.string()
  .matches(/^\d{4}$/, "Pin must be exactly 4 digits")
  .required(requiredTXT);

export const logInValidationSchema = Yup.object({
  userId: userId,
  password: password,
});
