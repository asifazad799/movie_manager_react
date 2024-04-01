import axios from "axios";
import ls from "localstorage-slim";

const baseUrl = process.env.REACT_APP_BASE_URL;

const loggedUser = ls.get("loggedInUser", { secret: 50 });
const Token = loggedUser?.state?.loggedInUser?.token;

export const API = axios.create({
  baseURL: baseUrl,
  headers: { Authorization: `Bearer ${Token}` },
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      sessionStorage.setItem("redirect", window.location.href);

      localStorage.clear();
      sessionStorage.clear();
      window.location = "/";
      F;
    }

    if (error.response) return Promise.reject(error);
  }
);
