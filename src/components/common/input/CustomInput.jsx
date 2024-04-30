import React from "react";

import "../../../styles/customInput.css";

import { InputLabel, TextField } from "@mui/material";

export function CustomInput(props) {
  const {
    title,
    label,
    errorBorder,
    pr,
    style,
    customStyle,
    disable,
    ...newPorops
  } = props;

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <InputLabel
        title={title}
        className="defaultFontFam"
        style={{
          paddingLeft: "10px",
          color: "#FFF",
          fontSize: "11px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "16px",
          letterSpacing: "1.92px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          textAlign: "left",
        }}
      >
        {title}
      </InputLabel>
      <TextField
        {...newPorops}
        placeholder={label}
        fullWidth
        InputProps={{
          className: "customInput",
          style: {
            marginTop: "0px",
            borderRadius: "4px",
          },
        }}
        style={{
          "& legend": { display: "none !important" },
          "& fieldset": {
            top: 0,
            errorBorder: "0px",
            customStyle: { borderColor: "green" },
          },
          marginTop: "8px",
          marginBottom: "18px !important",
        }}
      />
    </div>
  );
}
