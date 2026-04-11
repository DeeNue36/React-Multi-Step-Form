import { create } from 'zustand';

export const usePlanSelection = create((set, get) => ({
    selectedPlan: null, // state to hold the selected plan, initially null i.e. 'arcade' | 'advanced' | 'pro'
    planError: '',
    isYearly: false,
    toggleThumbClicked: false,

    setSelectPlan: (planName) => {
        set({
            selectedPlan: planName, // passing the plan name helps remove the active state on a previously selected plan
            planError: '' // clear any existing error messages when a plan is selected
        });
    },

    setPlanError: (error) => {
        set({
            planError: error,
        });
    },

    clearPlanSelection: () => {
        set({
            selectedPlan: null,
            planError: '',
            isYearly: false
        });
    },

    setIsYearly: (yearly) => {
        set({
            isYearly: yearly
        });
    },

    bounceToggleThumb: () => {
        set ({ toggleThumbClicked: true })
        setTimeout(() => {
            set({ toggleThumbClicked: false });
        }, 200);
    },

    handleBillingToggle: (value) => {
        const isYearlyBilling = value === '1';
        set({ isYearlyBilling });
        get().bounceToggleThumb();
    },

    selectMonthly: () => {
        set({ isYearly: false});
        get().bounceToggleThumb();
    },

    selectYearly: () => {
        set({ isYearly: true});
        get().bounceToggleThumb();
    },


}));