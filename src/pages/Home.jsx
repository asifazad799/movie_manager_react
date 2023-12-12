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
    {
      backdrop:
        "https://wookie.codesubmit.io/static/backdrops/a9d94d6e-4cab-44a9-8eec-d44ad6332b6d.jpg",
      cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      classification: "18+",
      director: "Quentin Tarantino",
      genres: ["Crime", "Drama"],
      id: "a9d94d6e-4cab-44a9-8eec-d44ad6332b6d",
      imdb_rating: 8.9,
      length: "2h 34min",
      overview:
        "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
      poster:
        "https://wookie.codesubmit.io/static/posters/a9d94d6e-4cab-44a9-8eec-d44ad6332b6d.jpg",
      released_on: "1994-09-10T00:00:00",
      slug: "pulp-fiction-1994",
      title: "Pulp Fiction",
    },
    {
      backdrop:
        "https://wookie.codesubmit.io/static/backdrops/4ec83f0e-eede-4453-8f87-461525e21f6e.jpg",
      cast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
      classification: "18+",
      director: "Steven Spielberg",
      genres: ["Biography", "Drama", "History"],
      id: "4ec83f0e-eede-4453-8f87-461525e21f6e",
      imdb_rating: 8.9,
      length: "3h 15min",
      overview:
        "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
      poster:
        "https://wookie.codesubmit.io/static/posters/4ec83f0e-eede-4453-8f87-461525e21f6e.jpg",
      released_on: "1993-12-15T00:00:00",
      slug: "schindlers-list-1993",
      title: "Schindler's List",
    },
    {
      backdrop:
        "https://wookie.codesubmit.io/static/backdrops/f3d91837-a2ff-4250-99b0-e8c9c036a23a.jpg",
      cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
      classification: "7+",
      director: ["Bob Persichetti", "Peter Ramsey", "Rodney Rothman"],
      genres: ["Animation", "Action", "Adventure"],
      id: "f3d91837-a2ff-4250-99b0-e8c9c036a23a",
      imdb_rating: 8.5,
      length: "1h 57min",
      overview:
        'Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson "Kingpin" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.',
      poster:
        "https://wookie.codesubmit.io/static/posters/f3d91837-a2ff-4250-99b0-e8c9c036a23a.jpg",
      released_on: "2018-12-06T00:00:00",
      slug: "spider-man-into-the-spider-verse-2018",
      title: "Spider-Man: Into the Spider-Verse",
    },
    {
      backdrop:
        "https://wookie.codesubmit.io/static/backdrops/9a70e529-9070-4a2f-963c-c5bb253cc721.jpg",
      cast: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
      classification: "13+",
      director: ["Anthony Russo", "Joe Russo"],
      genres: ["Action", "Adventure", "Sci-Fi"],
      id: "9a70e529-9070-4a2f-963c-c5bb253cc721",
      imdb_rating: 8.5,
      length: "2h 29min",
      overview:
        "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      poster:
        "https://wookie.codesubmit.io/static/posters/9a70e529-9070-4a2f-963c-c5bb253cc721.jpg",
      released_on: "2018-04-25T00:00:00",
      slug: "avengers-infinity-war-2018",
      title: "Avengers: Infinity War",
    },
    {
      backdrop:
        "https://wookie.codesubmit.io/static/backdrops/4d949e14-b08b-47fb-bab0-22c732dbedf3.jpg",
      cast: ["Harrison Ford", "Karen Allen", "Paul Freeman"],
      classification: "7+",
      director: "Steven Spielberg",
      genres: ["Action", "Adventure"],
      id: "4d949e14-b08b-47fb-bab0-22c732dbedf3",
      imdb_rating: 8.5,
      length: "1h 55min",
      overview:
        "When Dr. Indiana Jones – the tweed-suited professor who just happens to be a celebrated archaeologist – is hired by the government to locate the legendary Ark of the Covenant, he finds himself up against the entire Nazi regime.",
      poster:
        "https://wookie.codesubmit.io/static/posters/4d949e14-b08b-47fb-bab0-22c732dbedf3.jpg",
      released_on: "1981-06-12T00:00:00",
      slug: "raiders-of-the-lost-ark-1981",
      title: "Raiders of the Lost Ark",
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
                <Grid key={movie?.title} xs={12} sm={6} md={4} item>
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
