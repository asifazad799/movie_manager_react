import { useEffect, useState } from "react";

import { getAllMovie } from "../../../api";

import { customtToast } from "../../../components";

import { getErrorMessageFormAPI } from "../../../utils";

import { useAppStore } from "../../../store";

export function useGetAllMovie() {
  const loggeduser = useAppStore((state) => state?.loggedInUser);
  const [allMovie, setAllMovie] = useState([]);
  const [search, setSearch] = useState("");

  const getAllMovies = async () => {
    try {
      let res = await getAllMovie({
        search: search,
        userId: loggeduser?.user?._id,
      });
      setAllMovie(() => res?.data?.list);
    } catch (error) {
      customtToast("error", getErrorMessageFormAPI(error));
    }
  };

  useEffect(() => {
    getAllMovies();
  }, [search]);

  return { getAllMovies, allMovie, setSearch };
}
