import React, { useState } from "react";
import { loginAPI } from "../api";
import ls from "localstorage-slim";
import { useAppStore } from "../store/globalStore";
import { useNavigate } from "react-router-dom";

function useLogin({ setApiError }) {
  const [laoding, setLoading] = useState(false);
  const setLoggedInUser = useAppStore((state) => state.setLoggedInUser);
  const navigate = useNavigate();

  const login = async (body) => {
    setLoading(true);
    setApiError("");
    try {
      let res = await loginAPI(body);
    //   console.log(res?.data, "lkanlbfj");

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
      return;
    } catch (error) {
      setApiError(() => error?.response?.data?.message);
      setLoading(false);
    }
  };

  return { login, laoding };
}

export default useLogin;
