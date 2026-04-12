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
        setSelectPlan, 
        planError, 
        setPlanError,
        clearPlanSelection,
        isYearly,
        selectMonthly,
        selectYearly,
        toggleThumbClicked
    } = usePlanSelection();

    //* Plans Array
    const plans = [
        {id: 'arcade', name: 'Arcade', monthly: 9, yearly: 90, image: arcade },
        {id: 'advanced', name: 'Advanced', monthly: 12, yearly: 120, image: advanced },
        {id: 'pro', name: 'Pro', monthly: 15, yearly: 150, image: pro }
    ];

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
                    { planError || selectedPlan ? 
                        (
                            <div className="flex justify-between items-center h-8 mbe-[0.4rem]">
                                <span className="plan-error">{planError}</span>
                                <button 
                                    type="button" 
                                    onClick={clearPlanSelection}
                                    className='text-neutral-dark-grey hover:text-primary-bright-red'
                                >
                                    Clear
                                </button>
                            </div>
                        ) : null
                    }

                    <div className="plan-container">
                        {/* <!-- * Plan Cards --> */}
                        {plans.map(({id, name, monthly, yearly, image}) => (
                            <button
                                type="button"
                                key={id}
                                className={`plan-card ${selectedPlan === id ? 'active' : ''}`}
                                onClick={() => setSelectPlan(id)} 
                            >
                                <span className="plan-card-image">
                                    <img src={image} alt={`${name} Plan Image`} />
                                </span>

                                <span className="plan-card-body">
                                    <h3 className="plan-card-header">
                                        {name}
                                    </h3>
                                    <span className="monthly-yearly-pricing">
                                        <span className="price">${isYearly ? yearly : monthly}</span>
                                        <span className="pricing-cycle">/{isYearly ? 'yr' : 'mo'}</span>
                                    </span>
                                    {isYearly && 
                                        <p className="yearly-discount-duration">
                                            2 months free
                                        </p>
                                    }
                                </span>
                            </button>
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
                                checked={!isYearly} // true, by default isYearly is false
                                onChange={selectMonthly}
                            />
                            <label htmlFor="monthly">Monthly</label>
                        </div>

                        <div className="toggle-container">
                            <label htmlFor="billing-toggle">Toggle</label>
                            <input 
                                type="range" 
                                id="billing-toggle" 
                                name="billing toggle" 
                                min="0" max="1" step="1" 
                                value={isYearly ? '1' : '0'}
                                // onInput={handleBillingToggle}
                                onInput={(e) => {
                                    const value = e.target.value;
                                    value === '1' ? selectYearly() : selectMonthly();
                                }}
                            />
                            <div className={`toggle-thumb ${toggleThumbClicked ? 'bounce' : ''}`}></div>
                        </div>

                        <div className="billing-option-container">
                            <input 
                                type="radio" 
                                id="yearly" 
                                name="billing" 
                                value="yearly"
                                checked={isYearly} // false, by default isYearly is false
                                onChange={selectYearly}
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