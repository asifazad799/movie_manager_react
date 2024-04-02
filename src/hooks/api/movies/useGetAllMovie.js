import { useEffect, useState } from "react";

import { getAllMovie } from "../../../api";

import { customtToast } from "../../../components";

import { getErrorMessageFormAPI } from "../../../utils";

export function useGetAllMovie({ neList }) {
  const [allMovie, setAllMovie] = useState([]);
  const [search, setSearch] = useState("");

  const getAllMovies = async () => {
    try {
      let payload = { search: search };
      if (neList?.length) {
        payload.neList = neList?.join(",");
      }
      let res = await getAllMovie({
        ...payload,
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
