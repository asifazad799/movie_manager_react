import React from "react";

export function BluredPloygons() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="402"
      height="811"
      viewBox="0 0 402 811"
      fill="none"
      style={{
        fill: "rgba(30, 22, 116, )",
        filter: "blur(11px)",
        width: "418.29px",
        height: " 362.25px",
        flexShrink: "0",
      }}
    >
      <g filter="url(#filter0_f_243_35)">
        <path
          d="M433.687 224.25L642.832 586.5H224.542L433.687 224.25Z"
          fill="#1E1674"
          fill-opacity="0.77"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_243_35"
          x="0.542114"
          y="0.25"
          width="866.29"
          height="810.25"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="112"
            result="effect1_foregroundBlur_243_35"
          />
        </filter>
      </defs>
    </svg>
  );
}
