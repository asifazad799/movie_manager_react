import React from "react";

function MovieCards({ title, backdrop, poster }) {
  return (
    <div
      className="login-form d-flex movieListCard"
      style={{ backgroundImage: `url(${poster})` }}
    >
      {/* <img src={backdrop} /> */}
      {/* {title} */}
    </div>
  );
}

export default MovieCards;
