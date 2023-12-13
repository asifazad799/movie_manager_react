import axios from "axios";
import ls from "localstorage-slim";
//move to evn file
const baseUrl = "http://localhost:8080";

function setHeaders(req) {
  const loggedUser = ls.get("loggedInUser", { secret: 50 });
  // console.log(loggedUser, "nkacnka");
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

export const loginAPI = (body) => {
  return API.post("/auth/log-in", { ...body });
};

export const signAPI = (body) => {
  return API.post("/auth/sign-up", { ...body });
};

export const getUserMovieList = (param) => {
  return API.get("/movie/user-movie-list", { params: param });
};

export const getAllMovie = (param) => {
  return API.get("/movie/list", { params: param });
};

export const addMovie = (body) => {
  return API.post("/movie/add", body);
};

export const deleteMovie = (param) => {
  return API.delete("/movie/delete", { params: param });
};
