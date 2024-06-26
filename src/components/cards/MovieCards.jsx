import React, { useState } from "react";

import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { Checkbox } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";

export function MovieCards({
  poster,
  customHandler,
  selected,
  handleDelete,
  _id,
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="d-flex movieListCard"
      style={{ backgroundImage: `url(${poster})` }}
      onMouseEnter={() => {
        setHover((pre) => !pre);
      }}
      onMouseLeave={() => {
        setHover((pre) => !pre);
      }}
    >
      {hover ? (
        customHandler ? (
          customHandler
        ) : (
          <div className="hoverLayer">
            <DeleteOutlineRoundedIcon
              className="deleteIcon"
              onClick={() => {
                handleDelete({ movieId: _id });
              }}
              color="red"
            />

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
        )
      ) : selected ? (
        customHandler ? (
          customHandler
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </div>
  );
}
