import * as Yup from "yup";
import { requiredTXT } from "./constnds";

let userId = Yup.string().required(requiredTXT);
let password = Yup.string()
  .required(requiredTXT)
  .matches(/^[0-9]{6}$/, "password must be a 6 digit number");
export const logInValidationSchema = Yup.object({
  userId: userId,
  password: password,
});
