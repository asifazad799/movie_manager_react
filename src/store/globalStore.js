import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAppStore = create(
  persist(
    (set, get) => ({
      loggedInUser: null,
      setLoggedInUser: (user) => set({ loggedInUser: user }),
    }),
    {
      name: "loggedInUser",
    }
  )
);
