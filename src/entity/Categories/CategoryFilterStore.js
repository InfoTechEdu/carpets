import { create } from "zustand";

export const useCategoryFilterStore = create(((set) => ({
    filtredAt:"Все",
    setFilter: (filter) => set(() => ({
        filtredAt:filter,
    })),
})))