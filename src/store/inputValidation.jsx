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
    },

    validateEmail: (value) => {
        const trimmedValue = value.trim();

        if (!trimmedValue) {
            return 'This field is required';
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailRegex.test(trimmedValue)) {
            return 'Please enter a valid email address';
        }
    },

    validatePhone: (value) => {
        const trimmedValue = value.trim();

        if (!trimmedValue) {
            return 'This field is required';
        }

        const phoneRegex = /^\+?\d{1,3} ?\d{3} ?\d{3} ?\d{3,4}$/;
        if(!phoneRegex.test(trimmedValue)) {
            return 'Please enter a valid phone number';
        }
    },

    handleInputChange: (field, value) => {
        // DYNAMIC STATE UPDATE using template literals, [`${field}Value`] becomes 'nameValue', 'emailValue', etc. when passed to the respective fields using the onChange handler on the input fields in the PersonalInfo component. This allows us to update the corresponding state value based on the field being updated without needing separate handlers for each field. 
        // e.g. when updating the name field, handleInputChange('name', e.target.value) will set the nameValue state to the new value entered by the user i.e. set({ nameValue: 'Stephen King' }) for field='name'
        set({ [`${field}Value`]: value });

        if (field === 'name') {
            // access the current value of the name field using get and validate it only when there's a value else show required error
            const error = value ? get().validateName(value) : 'This field is required';
            set({ nameError: error}); // update the nameError state with the validation result
        }
        
        if (field === 'email') {
            const error = value ? get().validateEmail(value) : 'This field is required';
            set({ emailError: error });
        }

        if (field === 'phone') {
            const error = value ? get().validatePhone(value) : 'This field is required';
            set({ phoneError: error });
        }
    },

    //* Validate all fields on form submit before proceeding to the next step
    validateForm: () => {
        const fieldState = get();

        //? Check each field's values against their validation functions and store the error message(s) in the variables. If a field's value is valid, the variable(s) will be an empty string, which is falsy and vice versa.
        const nameError = fieldState.validateName(fieldState.nameValue);
        const emailError = fieldState.validateEmail(fieldState.emailValue);
        const phoneError = fieldState.validatePhone(fieldState.phoneValue);

        //? Update the state with the error messages for each field
        set({
            nameError,
            emailError,
            phoneError
        });

        //? If the variables are empty strings(falsy), it means all the fields are valid and the user can proceed to the next step
        return !nameError && !emailError && !phoneError; // will return true if all entered fields are valid
    }
}))