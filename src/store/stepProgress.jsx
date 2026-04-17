import { create } from 'zustand';
import { useInputValidation } from './inputValidation';
import { usePlanSelection } from './planSelection';

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

    //* Check if all prior steps (1,2,3) valid to allow free navigation between steps
    isPriorStepsValid: () => {
        const current = get();
        return current.validateStep1() && current.validateStep2() && current.validateStep3();
    },

    handleStepClick: (targetStep) => {
        const state = get();
        const current = state.currentStep;

        // Backward navigation -- got to previous step
        if (targetStep < current) {
            state.setCurrentStep(targetStep);
            return;
        }

        // Check if all prior steps (1-3) valid → FREE NAVIGATION to any targetStep (1-4)
        if (state.isPriorStepsValid()) {
            state.setCurrentStep(targetStep);
            return;
        }

        // Forward navigation but validate current step first before proceeding
        if (!state.validateCurrentStep()) {
            // Invalid: Stay on the current step and show errors (active state persists)
            return;
        }

        // Allow direct navigation to adjacent step (current+1) or step <= 2
        // When trying to skip to steps 3/4: Push to next linear step if prereqs not met
        if (targetStep === current + 1 || targetStep <= 2) {
            // Direct navigation: (1->2,2->3,3->4) OR step1/2 always
            state.setCurrentStep(targetStep);
        } else {
            // Skip to 3/4 from non-adjacent: Linear push (step 1-> step 3/4 -> go to step 2; step 2-> step 4 -> go to step 3)
            state.setCurrentStep(current + 1);
        }
    }

}))