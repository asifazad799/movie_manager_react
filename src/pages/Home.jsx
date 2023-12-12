import React from "react";
import DefaultParentComp from "../components/DefaultParentComp";
import "../styles/movieCard.css";
import "../styles/home.css";
import CustomInput from "../components/CustomInput";
import MovieCards from "../components/MovieCards";
import { Grid } from "@mui/material";

function Home() {
  const data = [
    {
      backdrop:
        "https://wookie.codesubmit.io/static/backdrops/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
      cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      classification: "13+",
      director: "Christopher Nolan",
      genres: ["Action", "Crime", "Drama"],
      id: "d6822b7b-48bb-4b78-ad5e-9ba04c517ec8",
      imdb_rating: 9.0,
      length: "2h 32min",
      overview:
        "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      poster:
        "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
      released_on: "2008-07-16T00:00:00",
      slug: "the-dark-knight-2008",
      title: "The Dark Knight",
    },
    { title: "titanic" },
    { title: "titanic" },
    { title: "titanic" },
  ];

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
              label="Search Movie"
              title={"Search Movie"}
            />
          </Grid>
          <Grid xs={12} sm={3} md={2} item>
            <button style={{ height: "39px" }} className="loginBtn">
              <p className="defaultFontFam confirmTxt mr-0">Add New Movie</p>
            </button>
          </Grid>
        </Grid>
        {/* </div> */}
        <div className="movieList">
          <Grid container spacing={1}>
            {data?.map((movie) => {
              return (
                <Grid xs={12} sm={6} md={4} item>
                  <MovieCards {...movie} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </DefaultParentComp>
  );
}

export default Home;
