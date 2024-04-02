import axios from "axios";
import ls from "localstorage-slim";

const baseUrl = process.env.REACT_APP_BASE_URL;

function setHeaders(req) {
  const loggedUser = ls.get("loggedInUser", { secret: 50 });
  const Token = loggedUser?.state?.loggedInUser?.token;

  if (Token) {
    req.headers.Authorization = `Bearer ${Token}`;
  }
  return req;
}

export const API = axios.create({
  baseURL: baseUrl,
});

API.interceptors.request.use((req) => setHeaders(req));

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      sessionStorage.clear();
      window.location = "/";
    }

    if (error.response) return Promise.reject(error);
  }
);

export const UNPROTECTED_API = axios.create({
  baseURL: baseUrl,
});
