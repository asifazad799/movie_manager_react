import axios from "axios";
import ls from "localstorage-slim";
const baseUrl = "http://localhost:8080";

function setHeaders(req) {
  const loggedUser = ls.get("logged-entity", { secret: 50 });
  const Token = loggedUser?.token;

  if (Token) {
    req.headers.Authorization = `Bearer ${Token}`;
  }
  return req;
}

const API = axios.create({
  baseURL: baseUrl,
});

API.interceptors.request.use((req) => setHeaders(req));

export const loginAPI = (body) => {
  return API.post(baseUrl + "/auth/log-in", { ...body });
};
