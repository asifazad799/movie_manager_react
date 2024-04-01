import { API } from "../config";

export const loginAPI = (body) => {
  return API.post("/auth/log-in", { ...body });
};

export const signAPI = (body) => {
  return API.post("/auth/sign-up", { ...body });
};
