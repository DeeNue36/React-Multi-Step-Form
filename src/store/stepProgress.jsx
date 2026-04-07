import { create } from 'zustand'

export const useStepProgress = create((set) => ({
    currentStep: 1,
    setCurrentStep: (step) => set({ currentStep: step }),
    nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 5) })),
    prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 1) })),
}))