import React, { useState } from "react";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { Checkbox } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";

function MovieCards({ title, backdrop, poster }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="login-form d-flex movieListCard"
      style={{ backgroundImage: `url(${poster})` }}
      onMouseEnter={() => {
        setHover((pre) => !pre);
      }}
      onMouseLeave={() => {
        setHover((pre) => !pre);
      }}
    >
      {hover && (
        <div className="hoverLayer">
          <DeleteOutlineRoundedIcon className="deleteIcon" color="red" />

          <div className="watchToggleSection">
            <p className="defaultFontFam">Wtched</p>
            <Checkbox
              icon={
                <RadioButtonUncheckedRoundedIcon className="checkBoxIcon notWatched" />
              }
              checkedIcon={
                <CheckCircleOutlineRoundedIcon className="checkBoxIcon watched" />
              }
            />
          </div>
        </div>
      )}
      {/* <img src={backdrop} /> */}
      {/* {title} */}
    </div>
  );
}

export default MovieCards;
