import React from "react";
import "../styles/movieCard.css";
import "../styles/home.css";

function AddMovieButton({ hanleClick }) {
  return (
    <button
      onClick={hanleClick}
      style={{ height: "39px" }}
      className="loginBtn"
    >
      <p className="defaultFontFam confirmTxt mr-0">Add New Movie</p>
    </button>
  );
}

export default AddMovieButton;
