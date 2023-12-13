import axios from "axios";
import ls from "localstorage-slim";
const baseUrl = "http://localhost:8080";

function setHeaders(req) {
  const loggedUser = ls.get("loggedInUser", { secret: 50 });
  console.log(loggedUser, "nkacnka");
  const Token = loggedUser?.state?.loggedInUser?.token;

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
  return API.post("/auth/log-in", { ...body });
};

export const getUserMovieList = (param) => {
  return API.get("/movie/user-movie-list", { params: param });
};

export const getAllMovie = (param) => {
  return API.get("/movie/list", { params: param });
};
