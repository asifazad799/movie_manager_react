import { UNPROTECTED_API } from "../config/config";

export const loginAPI = (body) => {
  return UNPROTECTED_API.post("/auth/log-in", { ...body });
};

export const signAPI = (body) => {
  return UNPROTECTED_API.post("/auth/sign-up", { ...body });
};
