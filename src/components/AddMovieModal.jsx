import { Dialog, Grid } from "@mui/material";
import React, { useState } from "react";
import "../styles/modal.css";
import "../styles/home.css";
import "../styles/movieCard.css";
import CustomInput from "./CustomInput";
import AddMovieButton from "./AddMovieButton";
import { movieData } from "../utils/sampleStaticData";
import MovieCards from "./MovieCards";
import useGetAllMovie from "../hooks/useGetAllMovie";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { Checkbox } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import useAddMovie from "../hooks/useAddMovie";
import DebouncedInput from "./DebouncedInput";

function AddMovieModal({ handleClose, open, neList, handleSubmit }) {
  const { getAllMovies, allMovie, setSearch } = useGetAllMovie({ neList });
  const { addMovies } = useAddMovie({ handleClose, handleSubmit });
  const [selected, setSelectedList] = useState({});

  const handleSelect = (val, index) => {
    setSelectedList((prev) => {
      return { ...prev, [index]: { ...val, selected: true } };
    });
  };

  const handleSearch = (value) => {
    setSearch(() => value);
  };

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
            {/* <CustomInput
              fullWidth
              variant="outlined"
              id="userId"
              label="Search"
              title={"Search New Movie"}
            /> */}
            <DebouncedInput handleChange={handleSearch} />
          </Grid>
          <Grid xs={12} sm={3} md={2} item>
            <AddMovieButton
              title={"Seacrh"}
              //   hanleClick={() => {
              //     setNewMoview(true);
              //   }}
            />
          </Grid>
        </Grid>
        <div className="movieList">
          {allMovie && (
            <Grid container spacing={1}>
              {allMovie?.map((movie, index) => {
                return (
                  <Grid key={movie?.title} xs={12} sm={6} md={4} item>
                    <MovieCards
                      selected={selected[index]?.selected}
                      {...movie}
                      customHandler={
                        <div className="hoverLayer">
                          {/* <DeleteOutlineRoundedIcon
                            className="deleteIcon"
                            color="red"
                          /> */}

                          <div className="watchToggleSection">
                            <p className="defaultFontFam">
                              {selected[index]?.selected
                                ? "Selected"
                                : "Select"}
                            </p>
                            <Checkbox
                              icon={
                                <RadioButtonUncheckedRoundedIcon className="checkBoxIcon notWatched" />
                              }
                              checkedIcon={
                                <CheckCircleOutlineRoundedIcon className="checkBoxIcon watched" />
                              }
                              checked={selected[index]?.selected || false}
                              onClick={() => {
                                handleSelect(movie, index);
                              }}
                            />
                          </div>
                        </div>
                      }
                    />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </div>
        <AddMovieButton
          title={"Add Movie"}
          hanleClick={() => {
            addMovies({ selected });
          }}
        />
      </div>
    </Dialog>
  );
}

export default AddMovieModal;
