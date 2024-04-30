import ls from "localstorage-slim";
import { useNavigate } from "react-router-dom";

import { useAppStore } from "../../../store";

export function useLogout() {
  let navigate = useNavigate();
  const setLoggedInUser = useAppStore((state) => state.setLoggedInUser);

  const logOut = () => {
    setLoggedInUser(null);
    ls.clear("loggedInUser");
    navigate("/");
  };

  return { logOut };
}
