import { create } from 'zustand';

export const useAddonsSelection = create((set) => ({
    selectedAddons: [],
    setAddons: (addon) => {
        set((state) => ({
            selectedAddons: [...state.selectedAddons, addon]
        }))
    },

    // Todo: implement adding active class for selected addons
    // setSelectedAddons: (addon) => {
    //     set((state) => {})
    // }
}))