import { create } from 'zustand';

export const addons = [
    {id:'online-service', name:'Online Service', monthly: 1, yearly: 10, description: 'Access to multiplayer games'},
    {id:'larger-storage', name:'Larger Storage', monthly: 2, yearly: 20, description: 'Extra 1TB of cloud save'},
    {id:'customizable-profile', name:'Customizable Profile', monthly: 2, yearly: 20, description: 'Custom theme on your profile'},
];


export const useAddonsSelection = create((set, get) => ({
    selectedAddons: [],

    setAddons: (addonId) => {
        set((state) => ({
            selectedAddons: state.selectedAddons.includes(addonId) ? state.selectedAddons.filter((id) => id !== addonId) : [...state.selectedAddons, addonId]
        }))
        // set((state) => {
        //     const addonsCurrentlySelected = state.selectedAddons;
        //     const isSelected = addonsCurrentlySelected.includes(addonId);

        //     let newAddons; // store the list of selected addons

        //     if(isSelected) {
        //         // if the addon has been selected remove it from the list
        //         newAddons = addonsCurrentlySelected.filter((id) => id !== addonId);
        //     }
        //     else {
        //         // else add the addon to the list
        //         newAddons = [...addonsCurrentlySelected, addonId]
        //     }

        //     return {
        //         selectedAddons: newAddons
        //     };
        // });
    },

    // Get addon data
    getAddonData: (addonId) => addons.find(addon => addon.id === addonId),

    // Calculate total addons price
    getTotalAddonsPrice: (isYearly) => {
        const { selectedAddons } = get();
        return selectedAddons.reduce((total, addonId) => {
            const addon = addons.find(addon => addon.id === addonId);
            const price = addon ? (isYearly ? addon.yearly : addon.monthly) : 0;
            return total + price;
        }, 0);
    },

}))