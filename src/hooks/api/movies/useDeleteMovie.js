import { useState } from "react";
import { useAppStore } from "../../../store/globalStore";
import { deleteMovie } from "../../../api";

export function useDeleteMovie({ handleDelete }) {
  const [laoding, setLoading] = useState(false);
  const loggeduser = useAppStore((state) => state?.loggedInUser);

  const deleteMovieList = async (data) => {
    setLoading(true);
    try {
      await deleteMovie({ ...data, userId: loggeduser?.user?._id });
      handleDelete(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return { deleteMovieList, laoding };
}
