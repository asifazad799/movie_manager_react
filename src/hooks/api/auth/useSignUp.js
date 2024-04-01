import { useEffect, useState } from "react";

import { signAPI } from "../../../api";

export function useSignUp() {
  const [laoding, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [res, setRes] = useState({});

  const signUpCall = async (data) => {
    setLoading(true);

    setApiError("");
    try {
      let res = await signAPI(data);
      setRes(() => {
        return res?.status;
      });

      setLoading(false);
    } catch (error) {
      setApiError(() => error?.response?.data?.message);
      setLoading(false);
    }
  };

  return { signUpCall, laoding, res, apiError };
}
