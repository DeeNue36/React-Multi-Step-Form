import { create } from 'zustand';

export const useDisplayPurchaseSummary = create((set) => ({
    showModal: false,

    setShowModal: (show) => set({showModal: show})
}));