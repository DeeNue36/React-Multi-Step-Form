import { create } from 'zustand';
import { useInputValidation } from './inputValidation';
import { usePlanSelection } from './planSelection';
// import { useAddonsSelection } from './addonsSelection';

export const useStepProgress = create((set, get) => ({
    currentStep: 1,

    setCurrentStep: (step) => set({ currentStep: step }),

    nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 5) })),

    prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),

    //* Validation functions when navigating with the step numbers

    //? Validate Step 1 - Personal Info Form Input Fields
    validateStep1: () => useInputValidation.getState().validateForm(),

    //? Validate Step 2 - Plan Selection
    validateStep2: () => {
        const planStore = usePlanSelection.getState();
        if (!planStore.selectedPlan) {
            planStore.setPlanError('Please select a plan to continue');
            return false;
        }
        planStore.setPlanError('');
        return true;
    },

    validateStep3: () => true,

    //* Handle non-linear navigation between steps
    validateCurrentStep: () => {
        const current = get();

        switch (current.currentStep) {
            case 1:
                return current.validateStep1();
            case 2:
                return current.validateStep2();
            case 3:
                return current.validateStep1() && current.validateStep2();
            default:
                return false;
        }
    },

    handleStepClick: (targetStep) => {
        const state = get();
        const current = state.currentStep;

        // Backward always -- got to previous step
        if (targetStep < current) {
            state.setCurrentStep(targetStep);
            return;
        }

        // Forward navigation: Validate current step first
        if (!state.validateCurrentStep()) {
            // Invalid: Stay on the current step and show errors (active state persists)
            return;
        }

        // Allow direct navigation to adjacent step (current+1) or any <= step 3 (addons exception)
        // Trying to skip to step 4: Push to next linear step from the current step
        if (targetStep === current + 1 || targetStep <= 2) {
            // Direct jumping: step 1 always, step 2 OR step 3 always -> e.g. step1→2, step2→3, any→3
            state.setCurrentStep(targetStep);
        } else {
            // When attempting to skip to 4 from non-adjacent step (1→4, 2→4)
            // Push the user to the next linear step (e.g. 1→2, 2→3), then user can click 4 again from 3
            state.setCurrentStep(current + 1);
        }
    }

    //todo: allow navigation to any step when they are all valid
}))