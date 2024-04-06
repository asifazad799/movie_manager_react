import React, { useState } from "react";

import "../../../styles/modal.css";
import "../../../styles/home.css";
import "../../../styles/movieCard.css";

import { useAddMovie, useGetAllMovie } from "../../../hooks";

import { Dialog, Grid } from "@mui/material";
import { Checkbox } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import { MovieCards } from "../../cards";
import { DebouncedInput, AddMovieButton } from "..";

export function AddMovieModal({ handleClose, open, neList, handleSubmit }) {
  const [selected, setSelectedList] = useState({});

  const { allMovie, setSearch } = useGetAllMovie({ neList });
  const { addMovies } = useAddMovie({ handleClose, handleSubmit });

  const handleSelect = (val, index, selected) => {
    setSelectedList((prev) => {
      if (selected === false && prev?.[index]) {
        delete prev[index];
        return { ...prev };
      }
      return { ...prev, [index]: { ...val, selected: selected } };
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
      PaperProps={{
        style: {
          width: "96%",
          margin: "0px",
          backgroundColor: "transparent",
          boxShadow: "none",
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
            <DebouncedInput handleChange={handleSearch} />
          </Grid>
          <Grid xs={12} sm={3} md={2} item>
            <AddMovieButton title={"Seacrh"} />
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
                                handleSelect(
                                  movie,
                                  index,
                                  !selected[index]?.selected
                                );
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
