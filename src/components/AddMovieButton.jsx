import React from "react";

import "../styles/movieCard.css";
import "../styles/home.css";

export function AddMovieButton({ hanleClick, title }) {
  return (
    <button
      onClick={hanleClick}
      style={{ height: "39px" }}
      className="loginBtn"
    >
      <p className="defaultFontFam confirmTxt mr-0">
        {title ? title : "Add New Movie"}
      </p>
    </button>
  );
}
