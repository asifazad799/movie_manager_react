import { useEffect, useState } from "react";
import { getAllMovie } from "../../api";

export function useGetAllMovie({ neList }) {
  const [allMovie, setAllMovie] = useState([]);
  const [search, setSearch] = useState("");

  const getAllMovies = async () => {
    try {
      let res = await getAllMovie({ neList: neList.join(","), search: search });
      setAllMovie(() => res?.data?.list);
    } catch (error) {}
  };

  useEffect(() => {
    getAllMovies();
  }, [search]);

  return { getAllMovies, allMovie, setSearch };
}
