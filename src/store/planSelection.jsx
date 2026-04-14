import { create } from 'zustand';

export const plans = [
    {id: 'arcade', name: 'Arcade', monthly: 9, yearly: 90 },
    {id: 'advanced', name: 'Advanced', monthly: 12, yearly: 120 },
    {id: 'pro', name: 'Pro', monthly: 15, yearly: 150 }
];

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


    //* Functions to get the selected plan price and name to display in the purchaseSummary component

    //? Get selected plan price
    getSelectedPlanPrice: () => {
        const { selectedPlan, isYearly } = get();

        if (!selectedPlan) return 0;

        // Use the plans array to find the selected plan based on its id and return either the monthly or yearly price
        const plan = plans.find(plan => plan.id === selectedPlan);
        return plan ? (isYearly ? plan.yearly : plan.monthly) : 0;
    },

    //? Get selected plan name
    getSelectedPlanName: () => {
        const { selectedPlan } = get();
        // Use the plans array to find the selected plan based on its id and return its name or use the state selectedPlan as a fallback
        const plan = plans.find(plan => plan.id === selectedPlan);
        return plan ? plan.name : selectedPlan || '';
    }


}));