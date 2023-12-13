import React, { useEffect, useState } from "react";
import { getUserMovieList } from "../api";
import { useAppStore } from "../store/globalStore";

function useGetUserMovieList() {
  const loggeduser = useAppStore((state) => state?.loggedInUser);
  const [movieList, setMovieList] = useState([]);

  const callUserMovieList = async () => {
    try {
      let res = await getUserMovieList({ userId: loggeduser?.user?._id });
      let data = res?.data?.list[0]?.newMovieList;
      let newList = [];
      res?.data?.list[0]?.movieList?.map((val, index) => {
        newList.push({ ...data[index], watched: val?.watched });
      });
    //   console.log(newList, "njnjnj");
      setMovieList(() => newList);
    } catch (error) {}
  };

  useEffect(() => {
    callUserMovieList();
  }, []);

  return { callUserMovieList, movieList };
}

export default useGetUserMovieList;
