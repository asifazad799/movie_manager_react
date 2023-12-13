import React, { useEffect, useState } from "react";
import { getAllMovie } from "../api";

function useGetAllMovie({ neList }) {
  const [allMovie, setAllMovie] = useState([]);

  const getAllMovies = async () => {
    try {
      let res = await getAllMovie({ neList: neList.join(",") });
      console.log(res?.data?.list, "res");
      setAllMovie(() => res?.data?.list);
    } catch (error) {}
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return { getAllMovies, allMovie };
}

export default useGetAllMovie;
