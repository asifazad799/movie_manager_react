import { useEffect, useState } from "react";

import { getUserMovieList } from "../../../api";

import { useAppStore } from "../../../store";

import { customtToast } from "../../../components";

import { getErrorMessageFormAPI } from "../../../utils";

export function useGetUserMovieList({ search }) {
  const loggeduser = useAppStore((state) => state?.loggedInUser);
  const [movieList, setMovieList] = useState([]);

  const callUserMovieList = async () => {
    let payload = { userId: loggeduser?.user?._id };

    if (search) {
      payload["search"] = search;
    }

    try {
      let res = await getUserMovieList(payload);
      let newList = [];
      res?.data?.list?.newMovieList?.map((val) => {
        newList.push(val);
      });

      setMovieList(() => [...newList]);
    } catch (error) {
      customtToast("error", getErrorMessageFormAPI(error));
    }
  };

  useEffect(() => {
    callUserMovieList();
  }, [search]);

  return { callUserMovieList, movieList };
}
