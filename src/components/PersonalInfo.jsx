import { useStepProgress } from "../store/stepProgress"

export const PersonalInfo = () => {
    const nextStep = useStepProgress((state) => state.nextStep);

    const handleSubmit = (e) => {
        e.preventDefault();
        //Validation logic to be added
        nextStep();
    }

    {/* <!-- * Step 1: Personal Info Form --> */}
    return (
        <form className="form personal-info-form" onSubmit={handleSubmit}>
            <section className=" form-mobile personal-info-form-mobile">  {/*<!-- * Mobile Container -->*/}

                <div className="form-header">
                    <h1>Personal info</h1>
                    <p>Please provide your name, email address, and phone number.</p>
                </div>
                <div className="form-body">
                    <div className="input-container">
                        <div className="label-and-error">
                            <label htmlFor="name">Name</label>
                            <span className="error-message"></span>
                        </div>
                        <input type="text" id="name" className="name" name="name" placeholder="e.g. Stephen King" required autoComplete="on"/>
                    </div>
                    <div className="input-container">
                        <div className="label-and-error">
                            <label htmlFor="email">Email Address</label>
                            <span className="error-message"></span>
                        </div>
                        <input type="email" id="email" className="email" name="email" placeholder="e.g. stephenking@lorem.com" required autoComplete="on"/>
                    </div>
                    <div className="input-container">
                        <div className="label-and-error">
                            <label htmlFor="phone">Phone Number</label>
                            <span className="error-message"></span>
                        </div>
                        <input type="tel" id="phone" className="phone-no" name="phone" placeholder="e.g. +1 234 567 890" required autoComplete="on"/>
                    </div>
                </div>

            </section>

            <div className="submit-form">
                <button type="submit" className="next-button">
                    Next Step
                </button>
            </div>
        </form>
    )
}