import { addMovie } from "../../../api";

import { useAppStore } from "../../../store/globalStore";

import { getErrorMessageFormAPI } from "../../../utils";

import { customtToast } from "../../../components";

export function useAddMovie({ handleClose, handleSubmit }) {
  const loggeduser = useAppStore((state) => state?.loggedInUser);
  const setLoggedInUser = useAppStore((state) => state.setLoggedInUser);

  const checkEmpty = (list) => {
    if (list?.length === 0) {
      throw new Error("Please select one movie");
    }
  };

  const addMovies = async (data) => {
    try {
      checkEmpty(Object.values(data?.selected));

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
    } catch (error) {
      customtToast("error", getErrorMessageFormAPI(error));
    }
  };

  return { addMovies };
}
