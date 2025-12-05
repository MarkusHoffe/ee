import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RootStore {
  someData: number;
  addSomeData: () => void;
}

const useRootStore = create<RootStore>()(
  persist(
    (set, get) => ({
      someData: 0,
      addSomeData: () => set({ someData: get().someData + 1 }),
    }),
    {
      name: "root-storage",
      storage: {
        getItem: (key) => Promise.resolve(localStorage.getItem(key)),
        setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
        removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
      },
    }
  )
);

export default useRootStore;
