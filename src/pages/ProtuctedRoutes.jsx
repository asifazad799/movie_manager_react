import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppStore } from "../store/globalStore";

function ProtuctedRoutes() {
  const loggeduser = useAppStore((state) => state?.loggedInUser);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(loggeduser, "agagj");
    if (!loggeduser?.token) {
      navigate("/");
    }
  }, []);

  return <Outlet />;
}

export default ProtuctedRoutes;
