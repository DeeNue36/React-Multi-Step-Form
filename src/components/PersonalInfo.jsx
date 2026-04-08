import { useStepProgress } from "../store/stepProgress";
import { useInputValidation } from '../store/inputValidation'

export const PersonalInfo = () => {
    const nextStep = useStepProgress((state) => state.nextStep);
    const {
        nameValue, 
        emailValue, 
        phoneValue,
        nameError,
        emailError,
        phoneError,
        handleInputChange,
        validateForm
    } = useInputValidation();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            nextStep();
        }
    }

    {/* <!-- * Step 1: Personal Info Form --> */}
    return (
        <form className="form personal-info-form">
            <section className=" form-mobile personal-info-form-mobile">  {/*<!-- * Mobile Container -->*/}

                <div className="form-header">
                    <h1>Personal info</h1>
                    <p>Please provide your name, email address, and phone number.</p>
                </div>
                <div className="form-body">

                    {/* Name Field */}
                    <div className="input-container">
                        <div className="label-and-error">
                            <label htmlFor="name">Name</label>
                            {nameError && <span className="error-message">{nameError}</span>}
                            {/* <span className="error-message">{nameError}</span> */}
                        </div>
                        <input 
                            type="text" 
                            id="name" 
                            className={ `name ${nameError ? 'error' : '' } `} 
                            name="name" 
                            placeholder="e.g. Stephen King" 
                            required autoComplete="on"
                            value={nameValue}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                        />
                    </div>

                    {/* Email Address Field */}
                    <div className="input-container">
                        <div className="label-and-error">
                            <label htmlFor="email">Email Address</label>
                            {emailError && <span className="error-message">{emailError}</span>}
                            {/* <span className="error-message">{emailError}</span> */}
                        </div>
                        <input 
                            type="email"
                            id="email" 
                            className={ `email ${emailError ? 'error' : '' } `} 
                            name="email" 
                            placeholder="e.g. stephenking@lorem.com" 
                            required autoComplete="on"
                            value={emailValue}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                    </div>

                    {/* Phone Number Field */}
                    <div className="input-container">
                        <div className="label-and-error">
                            <label htmlFor="phone">Phone Number</label>
                            {phoneError && <span className="error-message">{phoneError}</span>}
                            {/* <span className="error-message">{phoneError}</span> */}
                        </div>
                        <input 
                            type="tel" 
                            id="phone" 
                            className={ `phone-no ${phoneError ? 'error' : '' } `}  
                            name="phone" 
                            placeholder="e.g. +1 234 567 890" 
                            required autoComplete="on"
                            value={phoneValue}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                    </div>
                </div>

            </section>

            <div className="submit-form">
                <button type="submit" className="next-button" onClick={handleSubmit}>
                    Next Step
                </button>
            </div>
        </form>
    )
}