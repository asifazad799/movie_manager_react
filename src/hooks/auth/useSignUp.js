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
      console.log(data, "akjfnj");
      let res = await signAPI(data);
      console.log(res?.data);
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

  useEffect(() => {
    clearInterval(timer);
  }, [res]);

  return { signUpCall, laoding, res };
}
