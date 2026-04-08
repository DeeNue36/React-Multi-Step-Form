import { create } from "zustand";

export const useInputValidation = create((set, get) => ({
    nameValue: '',
    emailValue: '',
    phoneValue: '',

    nameError: '',
    emailError: '',
    phoneError: '',

    validateName: (value) => {
        const trimmedValue = value.trim();

        if (!trimmedValue) {
            return 'This field is required';
        }
        if (trimmedValue.length < 2) {
            return 'Name must be at least 2 characters';
        }
        //regex for full name validation with optional middle name
        const fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+(?: [a-zA-Z]+)?$/;
        if (!fullNameRegex.test(trimmedValue)) {
            return 'Please enter your full name';
        }
        return '';
        // return fullNameRegex.test(trimmedValue);
    },

    handleInputChange: (field, value) => {
        // 1. DYNAMIC STATE UPDATE using template literals, [`${field}Value`] becomes 'nameValue', 'emailValue', etc.
        // e.g. set({ nameValue: 'Stephen King' }) for field='name'
        set({ [`${field}Value`]: value });

        if (field === 'name') {
            // access the current value of the name field using get and validate it only when there's a value else show required error
            const error = value ? get().validateName(value) : 'This field is required';
            set({ nameError: error}); // update the nameError state with the validation result
        }
        //TODO: ADD FOR EMAIL AND PHONE FIELDS
    },

    // Validate all fields on form submit before proceeding to the next step
    validateForm: () => {
        const state = get();
        const nameError = state.validateName(state.nameValue);
        // const emailError = state.validateEmail(state.emailValue);
        // const phoneError = state.validatePhone(state.phoneValue);

        set({
            nameError,
            // emailError,
            // phoneError
        });

        return !nameError; // will return true is the name entered is valid
    },

    clearError: () => {
        set({
            nameError: '',
            // emailError: '',
            // phoneError: ''
        })
    }
}))