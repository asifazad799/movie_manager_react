import { addMovie } from "../../api";

import { useAppStore } from "../../store/globalStore";

export function useAddMovie({ handleClose, handleSubmit }) {
  const loggeduser = useAppStore((state) => state?.loggedInUser);

  const addMovies = async (data) => {
    try {
      let payload = {
        userId: loggeduser?.user?._id,
        movieListId: loggeduser?.user?.movieListId,
        selectedlist: Object.values(data?.selected)?.map((val) => ({
          movieId: val?._id,
        })),
      };

      let res = await addMovie(payload);
      handleClose();
      handleSubmit();
      //   console.log(res);
    } catch (error) {}
  };

  return { addMovies };
}
