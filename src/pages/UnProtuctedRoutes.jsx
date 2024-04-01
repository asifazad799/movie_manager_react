import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useAppStore } from "../store";

function UnProtuctedRoutes() {
  const loggeduser = useAppStore((state) => state?.loggedInUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggeduser) {
      navigate("/home");
    }
  }, []);

  return <Outlet />;
}

export default UnProtuctedRoutes;
