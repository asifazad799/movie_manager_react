import React, { useEffect, useState } from "react";

import "../styles/movieCard.css";
import "../styles/home.css";

import { useLogout, useDeleteMovie, useGetUserMovieList } from "../hooks";

import { Grid } from "@mui/material";
import {
  DefaultParentComp,
  MovieCards,
  AddMovieButton,
  AddMovieModal,
  DebouncedInput,
} from "../components";

export default function Home() {
  const [newMovie, setNewMoview] = useState(false);
  const [search, setSearch] = useState("");

  const { callUserMovieList, movieList } = useGetUserMovieList({
    search: search,
  });
  const { logOut } = useLogout();
  const { deleteMovieList } = useDeleteMovie();

  const handleSearch = (value) => {
    setSearch(value);
  };

  const hanleDelete = (data) => {
    deleteMovieList(data).then(() => {
      callUserMovieList();
    });
  };

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
            <DebouncedInput
              handleChange={handleSearch}
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
            {movieList?.map((movie) => {
              return (
                <Grid key={movie?.title} xs={12} sm={6} md={4} item>
                  <MovieCards handleDelete={hanleDelete} {...movie} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
      {newMovie && (
        <AddMovieModal
          handleSubmit={callUserMovieList}
          open={newMovie}
          handleClose={() => {
            setNewMoview(false);
          }}
        />
      )}
    </DefaultParentComp>
  );
}
