import { useState } from "react";

import { signAPI } from "../../../api";
import { customtToast } from "../../../components";

export function useSignUp() {
  const [laoding, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const signUpCall = async (data) => {
    setLoading(true);

    setApiError("");
    try {
      await signAPI(data);
      customtToast("success", "All set user created");
      setLoading(false);
    } catch (error) {
      setApiError(() => error?.response?.data?.message);
      setLoading(false);
    }
  };

  return { signUpCall, laoding, apiError };
}
