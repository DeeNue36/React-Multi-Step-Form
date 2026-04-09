import arcade from '/Images/icon-arcade.svg'
import advanced from '/Images/icon-advanced.svg'
import pro from '/Images/icon-pro.svg'
import { useStepProgress } from '../store/stepProgress'
import { usePlanSelection } from '../store/planSelection'

export const SelectPlan = () => {
    // const {nextStep, prevStep} = useStepProgress();
    const nextStep = useStepProgress((state) => state.nextStep);
    const prevStep = useStepProgress((state) => state.prevStep);
    const {selectedPlan, selectPlan, planError, setPlanError} = usePlanSelection();

    const handleNextStep = () => {
        if (!selectedPlan) {
            setPlanError('Please select a plan to continue');
            return;
        }
        setPlanError('');
        nextStep();
    }

    {/* <!-- * Step 2: Select Plan Section --> */}
    return (
        <section className="form select-plan-section">
            <section className="form-mobile select-plan-section-mobile">  {/*<!-- * Mobile Container -->*/}

                <div className="form-header">
                    <h1>Select your plan</h1>
                    <p>You have the option of monthly or yearly billing.</p>
                </div>

                <div className="form-body">
                    <span className="plan-error">{planError}</span>
                    <div className="plan-container">
                        {/* <!-- * Plan Cards --> */}

                        {/* <!-- * Plan Card 1: Arcade Plan --> */}
                        <div className={`plan-card ${selectedPlan === 'arcade' ? 'active' : ''}`} onClick={() => selectPlan('arcade')}>
                            <div className="plan-card-image">
                                <img src={arcade} alt="Arcade Plan Image"/>
                            </div>
                            <div className="plan-card-body">
                                <h3 className="plan-card-header">
                                    Arcade
                                </h3>
                                <div className="monthly-yearly-pricing">
                                    <span className="price">
                                        $9
                                    </span>
                                    <span className="pricing-cycle">
                                        /mo
                                    </span>
                                </div>
                                <p className="yearly-discount-duration hidden"></p>
                            </div>
                        </div>

                        {/* <!-- * Plan Card 2: Advanced Plan --> */}
                        <div className={`plan-card ${selectedPlan === 'advanced' ? 'active' : ''}`} onClick={() => selectPlan('advanced')}>
                            <div className="plan-card-image">
                                <img src={advanced} alt="Advanced Plan Image"/>
                            </div>
                            <div className="plan-card-body">
                                <h3 className="plan-card-header">
                                    Advanced
                                </h3>
                                <div className="monthly-yearly-pricing">
                                    <span className="price">
                                        $12
                                    </span>
                                    <span className="pricing-cycle">
                                        /mo
                                    </span>
                                </div>
                                <p className="yearly-discount-duration hidden"></p>
                            </div>
                        </div>

                        {/* <!-- * Plan Card 3: Pro Plan --> */}
                        <div className={`plan-card ${selectedPlan === 'pro' ? 'active' : ''}`} onClick={() => selectPlan('pro')}>
                            <div className="plan-card-image">
                                <img src={pro} alt="Pro Plan Image"/>
                            </div>
                            <div className="plan-card-body">
                                <h3 className="plan-card-header">
                                    Pro
                                </h3>
                                <div className="monthly-yearly-pricing">
                                    <span className="price">
                                        $15
                                    </span>
                                    <span className="pricing-cycle">
                                        /mo
                                    </span>
                                </div>
                                <p className="yearly-discount-duration hidden"></p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- * Billing Options: Monthly and Yearly --> */}
                    <div className="billing-container">
                        <div className="billing-option-container">
                            <input type="radio" id="monthly" name="billing" value="monthly" defaultChecked="true"/>
                            <label htmlFor="monthly">Monthly</label>
                        </div>

                        <div className="toggle-container">
                            <label htmlFor="billing-toggle">Toggle</label>
                            <input type="range" id="billing-toggle" name="billing toggle" min="0" max="1" step="1" defaultValue="0"/>
                            <div className="toggle-thumb"></div>
                        </div>

                        <div className="billing-option-container">
                            <input type="radio" id="yearly" name="billing" value="yearly"/>
                            <label htmlFor="yearly">Yearly</label>
                        </div>
                    </div>
                </div>

            </section>

            <div className="submit-btns submit-form">
                <button type="button" className="previous-button" onClick={prevStep}>
                    Go Back
                </button>
                <button type="button" className="next-button" onClick={handleNextStep}>
                    Next Step
                </button>
            </div>
        </section>
    )
}