import React from "react";
import ls from "localstorage-slim";
import { useNavigate } from "react-router-dom";

function useLogout() {
  let navigate = useNavigate();

  const logOut = () => {
    ls.remove("loggedInUser");
    navigate("/");
  };

  return { logOut };
}

export default useLogout;
