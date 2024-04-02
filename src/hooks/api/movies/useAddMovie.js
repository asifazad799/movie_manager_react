import { addMovie } from "../../../api";

import { useAppStore } from "../../../store/globalStore";

export function useAddMovie({ handleClose, handleSubmit }) {
  const loggeduser = useAppStore((state) => state?.loggedInUser);
  const setLoggedInUser = useAppStore((state) => state.setLoggedInUser);

  const addMovies = async (data) => {
    try {
      let payload = {
        userId: loggeduser?.user?._id,
        movieListId: loggeduser?.user?.movieListId || "",
        selectedlist: Object.values(data?.selected)?.map((val) => ({
          movieId: val?._id,
        })),
      };

      await addMovie(payload).then((res) => {
        if (!loggeduser?.user?.movieListId) {
          setLoggedInUser({
            ...loggeduser,
            user: {
              ...loggeduser.user,
              movieListId: res?.data?.movieList?._id,
            },
          });
        }
      });
      handleClose();
      handleSubmit();
    } catch (error) {}
  };

  return { addMovies };
}
