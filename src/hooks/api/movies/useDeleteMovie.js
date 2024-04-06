import { useState } from "react";

import { useAppStore } from "../../../store/globalStore";

import { deleteMovie } from "../../../api";

import { getErrorMessageFormAPI } from "../../../utils";

import { customtToast } from "../../../components";

export function useDeleteMovie() {
  const [laoding, setLoading] = useState(false);
  const loggeduser = useAppStore((state) => state?.loggedInUser);

  const deleteMovieList = async (data) => {
    setLoading(true);
    try {
      await deleteMovie({ ...data, userId: loggeduser?.user?._id });
      setLoading(false);
    } catch (error) {
      customtToast("error", getErrorMessageFormAPI(error));
      setLoading(false);
    }
  };

  return { deleteMovieList, laoding };
}
