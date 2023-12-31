import React, { useState } from "react";
import { useAppStore } from "../store/globalStore";
import { deleteMovie } from "../api";

function useDeleteMovie({ handleDelete }) {
  const [laoding, setLoading] = useState(false);
  const loggeduser = useAppStore((state) => state?.loggedInUser);

  const deleteMovieList = async (data) => {
    setLoading(true);
    try {
      let res = await deleteMovie({ ...data, userId: loggeduser?.user?._id });
      console.log({ ...data, userId: loggeduser?.user?._id }, res, "kjbb");
      handleDelete(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return { deleteMovieList, laoding };
}

export default useDeleteMovie;
