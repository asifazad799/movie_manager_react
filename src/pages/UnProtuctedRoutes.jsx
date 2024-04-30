import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useAppStore } from "../store";

export function UnProtuctedRoutes() {
  const loggeduser = useAppStore((state) => state?.loggedInUser);

  return loggeduser ? <Navigate to={"/home"} /> : <Outlet />;
}
