import { useEffect, useState } from "react";

import { signAPI } from "../../api";

export function useSignUp({ setApiError }) {
  const [laoding, setLoading] = useState(false);
  const [res, setRes] = useState({});

  let timer;

  const signUpCall = async (data) => {
    setLoading(true);

    setApiError("");
    try {
      let res = await signAPI(data);
      setRes(() => {
        return res?.status;
      });

      let timer = setTimeout(() => {
        setRes(null);
      }, 2000);

      //   clearInterval(timer);

      setLoading(false);
    } catch (error) {
      setApiError(() => error?.response?.data?.message);
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   clearTimeout(timer);
  // }, [res]);

  return { signUpCall, laoding, res };
}
