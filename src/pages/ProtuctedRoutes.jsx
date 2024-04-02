import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAppStore } from "../store";
import { useLogout } from "../hooks";

export function ProtuctedRoutes() {
  const loggeduser = useAppStore((state) => state?.loggedInUser);
  const { logOut } = useLogout();

  useEffect(() => {
    if (!loggeduser?.token) {
      logOut();
    }

    // const expiry = loggeduser.expiry;
    // const currentDate = new Date();
    // const expires_at_new = new Date(expiry);

    // if (currentDate > expires_at_new) {
    //   localStorage.clear();
    //   navigate("/");
    // }
  }, []);

  return <Outlet />;
}
