import { useState } from "react";
import ls from "localstorage-slim";

import { useAppStore } from "../../../store";
import { useNavigate } from "react-router-dom";

import { loginAPI } from "../../../api";

export function useLogin() {
  const [laoding, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const setLoggedInUser = useAppStore((state) => state.setLoggedInUser);
  const navigate = useNavigate();

  const login = async (body) => {
    setLoading(true);
    setApiError("");
    try {
      await loginAPI(body).then((res) => {
        ls.set(
          "loggedInUser",
          {
            token: res?.data?.token,
            user: res?.data?.user,
            expiry: res?.data?.expiry,
          },
          { secret: 50 }
        );
        setLoggedInUser({
          token: res?.data?.token,
          user: res?.data?.user,
          expiry: res?.data?.expiry,
        });
        navigate("/home");
        setLoading(false);
      });
    } catch (error) {
      setApiError(() => error?.response?.data?.message);
      setLoading(false);
    }
  };

  return { login, laoding, apiError };
}
