import React from "react";

import { BluredPloygons } from "./BluredPloygons";

export function DefaultParentComp({ children }) {
  return (
    <div className="d-flex justify-center align-center login-page">
      <div className="polygon1">
        <BluredPloygons />
      </div>
      <div className="polygon2">
        <BluredPloygons />
      </div>
      {children}
    </div>
  );
}
