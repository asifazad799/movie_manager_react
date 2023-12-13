import React, { useEffect, useState } from "react";
import DefaultParentComp from "../components/DefaultParentComp";
import "../styles/movieCard.css";
import "../styles/home.css";
import CustomInput from "../components/CustomInput";
import MovieCards from "../components/MovieCards";
import { Grid } from "@mui/material";
import AddMovieButton from "../components/AddMovieButton";
import AddMovieModal from "../components/AddMovieModal";
import { movieData } from "../utils/sampleStaticData";
import useGetUserMovieList from "../hooks/useGetUserMovieList";
import useLogout from "../hooks/useLogout";
import useDeleteMovie from "../hooks/useDeleteMovie";

function Home() {
  const [newMovie, setNewMoview] = useState(false);
  const { callUserMovieList, movieList } = useGetUserMovieList();
  const { logOut } = useLogout();
  const [list, setList] = useState([]);
  const handleDelete = (data) => {
    console.log(data?.movieId, list, "algj");

    setList((prev) => prev.filter((movie) => movie?._id !== data?.movieId));
  };
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

export default Home;
