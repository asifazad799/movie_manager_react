import React, { useEffect, useState } from "react";

import "../styles/movieCard.css";
import "../styles/home.css";

import { useLogout, useDeleteMovie, useGetUserMovieList } from "../hooks";

import { Grid } from "@mui/material";
import {
  DefaultParentComp,
  CustomInput,
  MovieCards,
  AddMovieButton,
  AddMovieModal,
} from "../components";

export function Home() {
  const [newMovie, setNewMoview] = useState(false);
  const [list, setList] = useState([]);

  const handleDelete = (data) => {
    setList((prev) => prev.filter((movie) => movie?._id !== data?.movieId));
  };

  const { callUserMovieList, movieList } = useGetUserMovieList();
  const { logOut } = useLogout();
  const { deleteMovieList } = useDeleteMovie({ handleDelete });

  useEffect(() => {
    setList(() => movieList);
  }, [movieList]);

  return (
    <DefaultParentComp>
      <div className="homeContainer">
        <p className="defaultFont">Your Movies</p>
        <div className="logOutWrapper">
          <div className="logout">
            <AddMovieButton title="Log Out" hanleClick={logOut} />
          </div>
        </div>
        <Grid container spacing={1} className="searchSec">
          <Grid xs={12} sm={9} md={10} item>
            <CustomInput
              fullWidth
              variant="outlined"
              id="userId"
              label="Search"
              title={"Search Your Movie"}
            />
          </Grid>
          <Grid xs={12} sm={3} md={2} item>
            <AddMovieButton
              hanleClick={() => {
                setNewMoview(true);
              }}
            />
          </Grid>
        </Grid>
        {/* </div> */}
        <div className="movieList">
          <Grid container spacing={1}>
            {list?.map((movie) => {
              return (
                <Grid key={movie?.title} xs={12} sm={6} md={4} item>
                  <MovieCards handleDelete={deleteMovieList} {...movie} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
      {newMovie && (
        <AddMovieModal
          handleSubmit={callUserMovieList}
          neList={movieList.map((val) => val?._id)}
          open={newMovie}
          handleClose={() => {
            setNewMoview(false);
          }}
        />
      )}
    </DefaultParentComp>
  );
}
