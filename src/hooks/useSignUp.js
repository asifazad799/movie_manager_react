import React, { useState } from "react";
import { signAPI } from "../api";

function useSignUp({ setApiError }) {
  const [laoding, setLoading] = useState(false);
  const [res, setRes] = useState({});

  const signUpCall = async (data) => {
    setLoading(true);

    setApiError("");
    try {
      console.log(data, "akjfnj");
      let res = await signAPI(data);
      setRes(() => {
        res;
      });
      setLoading(false);
    } catch (error) {
      setApiError(() => error?.response?.data?.message);
      setLoading(false);
    }
  };

  return { signUpCall, laoding, res };
}

export default useSignUp;
