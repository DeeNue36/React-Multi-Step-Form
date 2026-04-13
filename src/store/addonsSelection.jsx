import { create } from 'zustand';

export const useAddonsSelection = create((set) => ({
    selectedAddons: [],

    setAddons: (addonId) => {
        set((state) => {
            const addonsCurrentlySelected = state.selectedAddons;
            const isSelected = addonsCurrentlySelected.includes(addonId);

            let newAddons; // store the list of selected addons

            if(isSelected) {
                // if the addon has been selected remove it from the list
                newAddons = addonsCurrentlySelected.filter((id) => id !== addonId);
            }
            else {
                // else add the addon to the list
                newAddons = [...addonsCurrentlySelected, addonId]
            }

            return {
                selectedAddons: newAddons
            };
        });
    },
}))