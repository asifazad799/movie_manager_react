import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppStore } from "../store/globalStore";

function ProtuctedRoutes() {
  const loggeduser = useAppStore((state) => state?.loggedInUser);

  console.log(loggeduser,'agagj');

  return <Outlet />;
}

export default ProtuctedRoutes;
