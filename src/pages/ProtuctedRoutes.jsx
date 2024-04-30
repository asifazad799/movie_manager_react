import React from "react";
import { Outlet } from "react-router-dom";

import { useAppStore } from "../store";
// import { useLogout } from "../hooks";
import { Navigate } from "react-router-dom";

export function ProtuctedRoutes() {
  const loggeduser = useAppStore((state) => state?.loggedInUser);
  // const { logOut } = useLogout();

  return !loggeduser?.token ? <Navigate to={"/log-in"} /> : <Outlet />;
}
