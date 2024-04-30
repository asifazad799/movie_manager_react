import { API } from "../config/config";

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
