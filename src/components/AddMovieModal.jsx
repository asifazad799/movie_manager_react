import { Dialog, Grid } from "@mui/material";
import React from "react";
import "../styles/modal.css";
import "../styles/home.css";
import "../styles/movieCard.css";
import CustomInput from "./CustomInput";
import AddMovieButton from "./AddMovieButton";
import { movieData } from "../utils/sampleStaticData";
import MovieCards from "./MovieCards";
import useGetAllMovie from "../hooks/useGetAllMovie";

function AddMovieModal({ handleClose, open, neList }) {
  const { getAllMovies, allMovie } = useGetAllMovie({ neList });

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      open={open}
      onClose={handleClose}
      //   backdropProps={{}}
      PaperProps={{
        style: {
          width: "96%",
          margin: "0px",
          backgroundColor: "transparent", // Set the dialog background to transparent
          boxShadow: "none", // Optional: removes the default shadow
        },
      }}
      slotProps={{
        backdrop: {
          style: {
            backgroundColor: "rgba(17, 7, 22, 0.50)",
            backdropFilter: "blur(35px)",
          },
        },
      }}
    >
      <div className="homeContainer modalContainer">
        <Grid container spacing={1} className="searchSec">
          <Grid xs={12} sm={9} md={10} item>
            <CustomInput
              fullWidth
              variant="outlined"
              id="userId"
              label="Search"
              title={"Search New Movie"}
            />
          </Grid>
          <Grid xs={12} sm={3} md={2} item>
            <AddMovieButton
            //   hanleClick={() => {
            //     setNewMoview(true);
            //   }}
            />
          </Grid>
        </Grid>
        <div className="movieList">
          {allMovie && (
            <Grid container spacing={1}>
              {allMovie?.map((movie) => {
                return (
                  <Grid key={movie?.title} xs={12} sm={6} md={4} item>
                    <MovieCards {...movie} />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </div>
      </div>
    </Dialog>
  );
}

export default AddMovieModal;
