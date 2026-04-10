import arcade from '/Images/icon-arcade.svg'
import advanced from '/Images/icon-advanced.svg'
import pro from '/Images/icon-pro.svg'
import { useStepProgress } from '../store/stepProgress'
import { usePlanSelection } from '../store/planSelection'

export const SelectPlan = () => {
    // const {nextStep, prevStep} = useStepProgress();
    const nextStep = useStepProgress((state) => state.nextStep);
    const prevStep = useStepProgress((state) => state.prevStep);
    const {
        selectedPlan, 
        selectPlan, 
        planError, 
        setPlanError,
        isYearly,
        setIsYearly
    } = usePlanSelection();

    //* Plans Array
    const plans =[
        {id: 'arcade', name: 'Arcade', monthly: 9, yearly: 90, image: arcade },
        {id: 'advanced', name: 'Advanced', monthly: 12, yearly: 120, image: advanced },
        {id: 'pro', name: 'Pro', monthly: 15, yearly: 150, image: pro }
    ];

    //* Handle Billing Toggling
    const handleBillingToggle = (e) => {
        const isYearlyBilling = e.target.value === '1';
        setIsYearly(isYearlyBilling);
        bounceThumb(); // Thumb Animation
    }

    const handleMonthlyToggle = () => {
        setIsYearly(false);
        bounceThumb(); // Thumb Animation
    }

    const handleYearlyToggle = () => {
        setIsYearly(true);
        bounceThumb(); // Thumb Animation
    }

    const bounceThumb = () => {
        const thumb = document.querySelector('.toggle-thumb');
        thumb?.classList.add('clicked');
        setTimeout(() => thumb?.classList.remove('clicked'), 150);
    };

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
                    {planError && <span className="plan-error">{planError}</span>}

                    <div className="plan-container">
                        {/* <!-- * Plan Cards --> */}
                        {plans.map(({id, name, monthly, yearly, image}) => (
                            <div
                                key={id}
                                className={`plan-card ${selectedPlan === id ? 'active' : ''}`}
                                onClick={() => selectPlan(id)} 
                            >
                                <div className="plan-card-image">
                                    <img src={image} alt={`${name} Plan Image`} />
                                </div>

                                <div className="plan-card-body">
                                    <h3 className="plan-card-header">
                                        {name}
                                    </h3>
                                    <div className="monthly-yearly-pricing">
                                        <span className="price">${isYearly ? yearly : monthly}</span>
                                        <span className="pricing-cycle">/{isYearly ? 'yr' : 'mo'}</span>
                                    </div>
                                    {isYearly && 
                                        <p className="yearly-discount-duration">
                                            2 months free
                                        </p>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <!-- * Billing Options: Monthly and Yearly --> */}
                    <div className={`billing-container ${isYearly ? 'active' : ''}`}>
                        <div className="billing-option-container">
                            <input 
                                type="radio" 
                                id="monthly" 
                                name="billing" 
                                value="monthly" 
                                // defaultChecked="true"
                                checked={!isYearly} // true, by default isYearly is false
                                onChange={handleMonthlyToggle}
                            />
                            <label htmlFor="monthly">Monthly</label>
                        </div>

                        <div className="toggle-container">
                            <label htmlFor="billing-toggle">Toggle</label>
                            <input 
                                type="range" 
                                id="billing-toggle" 
                                name="billing toggle" 
                                min="0" 
                                max="1" 
                                step="1" 
                                // defaultValue="0"
                                value={isYearly ? '1' : '0'}
                                onChange={handleBillingToggle}
                            />
                            <div className="toggle-thumb"></div>
                        </div>

                        <div className="billing-option-container">
                            <input 
                                type="radio" 
                                id="yearly" 
                                name="billing" 
                                value="yearly"
                                checked={isYearly} // false, by default isYearly is false
                                onChange={handleYearlyToggle}
                            />
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

                        {/* <!-- * Plan Card 1: Arcade Plan --> */}
                        {/* <div className={`plan-card ${selectedPlan === 'arcade' ? 'active' : ''}`} onClick={() => selectPlan('arcade')}>
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
                        </div> */}

                        {/* <!-- * Plan Card 2: Advanced Plan --> */}
                        {/* <div className={`plan-card ${selectedPlan === 'advanced' ? 'active' : ''}`} onClick={() => selectPlan('advanced')}>
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
                        </div> */}

                        {/* <!-- * Plan Card 3: Pro Plan --> */}
                        {/* <div className={`plan-card ${selectedPlan === 'pro' ? 'active' : ''}`} onClick={() => selectPlan('pro')}>
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
                        </div> */}