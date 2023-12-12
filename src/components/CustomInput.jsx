import { InputLabel, TextField } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import "../styles/customInput.css";

function CustomInput(props) {
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

  //   const useStyles = makeStyles({
  //     root: {
  //       "& label.Mui-focused": {
  //         color: "transparent !important",
  //       },
  //       "& .MuiInputBase-root": {
  //         borderRadius: "5px !important",
  //         border: "1.4px solid white",
  //         color: "white !important",
  //         // transition: "border-color 0.2s ease-in-out !important",
  //         paddingRight: pr ? pr : "",
  //         backgroundColor: customStyle?.inputBgColor
  //           ? customStyle?.inputBgColor
  //           : "black !important",
  //         "-webkit-box-shadow": "0 0 0 0 #000 inset !important",
  //         "-webkit-text-fill-color": "#fff !important",
  //         background: customStyle?.inputBgColor
  //           ? customStyle?.inputBgColor
  //           : "black !important ",
  //         overflow: "hidden !important",
  //         // '&:hover': {
  //         //   borderColor: 'transparent',
  //         // },
  //         // '&.Mui-focused': {
  //         //   borderColor: 'transparent',
  //         // },
  //       },
  //       "& .MuiInputBase-root .MuiSelect-select ": {
  //         minHeight: "auto !important",
  //       },
  //       "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
  //         border: "none !important",
  //       },
  //       "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
  //         border: "none !important",
  //       },
  //       "& .MuiInputBase-root .MuiInputBase-input": {
  //         padding: customStyle?.inputPadding
  //           ? customStyle?.inputPadding
  //           : "12px 14px !important",
  //         fontSize: "14px !important",
  //       },
  //       "& .MuiFormHelperText-root": {
  //         fontSize: "12px !important",
  //       },
  //       "& .Mui-disabled": {
  //         background: "black !important ",
  //         color: newPorops?.error ? "red !important" : "",
  //       },
  //       "& .MuiOutlinedInput-multiline": {
  //         padding: newPorops?.error ? "24.5px 14px" : "11.5px 14px",
  //       },
  //       "& .MuiSelect-iconOutlined": {
  //         fill: "white",
  //       },
  //       "& .MuiFormControl-root .MuiTextField-root .makeStyles-root-6 .MuiFormControl-marginNormal":
  //         {
  //           marginTop: "8px !important",
  //         },
  //       // "& input:-internal-autofill-selected": {
  //       //   // backgroundColor: "red !important",
  //       //   // "-webkit-box-shadow": "0 0 0 100px #000 inset",
  //       //   // "-webkit-text-fill-color": "#fff",
  //       //   color: " #fff !important",
  //       //   "-webkit-text-fill-color": "#fff !important",
  //       //   "-webkit-background-clip": "text !important",
  //       //   "background-clip": "text !important",
  //       // },

  //       // '&:-webkit-autofill': {
  //       //   '-webkit-box-shadow': '0 0 0 100px #000 inset',
  //       //   '-webkit-text-fill-color': '#fff'
  //       // }
  //     },
  //   });
  //   const classes = useStyles();

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
          "& fieldset": { top: 0 },
          marginTop: "8px",
          marginBottom: "18px !important",
        }}
      />
    </div>
  );
}

export default CustomInput;
