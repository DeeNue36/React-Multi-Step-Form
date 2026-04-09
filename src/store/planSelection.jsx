import { create } from 'zustand';

export const usePlanSelection = create((set) => ({
    selectedPlan: null, // state to hold the selected plan, initially null i.e. 'arcade' | 'advanced' | 'pro'
    planError: '',

    selectPlan: (planName) => {
        set({
            selectedPlan: planName, // passing the plan name helps remove the active state on a previously selected plan
            planError: '' // clear any existing error messages when a plan is selected
        })
    },

    setPlanError: (error) => {
        set({
            planError: error,
        })
    },

    clearPlanSelection: () => {
        set({
            selectedPlan: null
        })
    }


}));