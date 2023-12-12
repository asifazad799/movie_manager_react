import React, { useState } from "react";
import DefaultParentComp from "../components/DefaultParentComp";
import "../styles/movieCard.css";
import "../styles/home.css";
import CustomInput from "../components/CustomInput";
import MovieCards from "../components/MovieCards";
import { Grid } from "@mui/material";
import AddMovieButton from "../components/AddMovieButton";
import AddMovieModal from "../components/AddMovieModal";
import { movieData } from "../utils/sampleStaticData";

function Home() {

  const [newMovie, setNewMoview] = useState(false);

  return (
    <DefaultParentComp>
      <div className="homeContainer">
        <p className="defaultFont">Your Movies</p>
        {/* <div className="searchSec"> */}
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
            {movieData?.map((movie) => {
              return (
                <Grid key={movie?.title} xs={12} sm={6} md={4} item>
                  <MovieCards {...movie} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
      <AddMovieModal
        open={newMovie}
        handleClose={() => {
          setNewMoview(false);
        }}
      />
    </DefaultParentComp>
  );
}

export default Home;
