import { create } from "zustand";

export const useCategoryFilterStore = create(((set) => ({
    filtredAt:"all",
    setFilter: (filter) => set(() => ({
        filtredAt:filter,
    })),
})))