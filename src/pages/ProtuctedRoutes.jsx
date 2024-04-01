import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useAppStore } from "../store";

export function ProtuctedRoutes() {
  const loggeduser = useAppStore((state) => state?.loggedInUser);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(loggeduser, "agagj");
    if (!loggeduser?.token) {
      navigate("/");
    }

    // const expiry = loggeduser.expiry;
    // const currentDate = new Date();
    // const expires_at_new = new Date(expiry);

    // if (currentDate > expires_at_new) {
    //   localStorage.removeItem("loggedInUser");
    //   navigate("/");
    // }
  }, []);

  return <Outlet />;
}
