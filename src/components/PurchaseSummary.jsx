import { useStepProgression } from "../store/stepProgression";
import { usePlanSelection } from "../store/planSelection";
import { useAddonsSelection } from "../store/addonsSelection";

export const PurchaseSummary = () => {
    const nextStep = useStepProgression((state) => state.nextStep);
    const prevStep = useStepProgression((state) => state.prevStep);

    const { isYearly, getSelectedPlanPrice, getSelectedPlanName } = usePlanSelection();
    const { selectedAddons, getTotalAddonsPrice, getAddonData } = useAddonsSelection();

    const planPrice = getSelectedPlanPrice();
    const planName = getSelectedPlanName();
    const addonsTotalPrice = getTotalAddonsPrice(isYearly);
    const total = planPrice + addonsTotalPrice;
    const billingCycle = isYearly ? 'yr' : 'mo';

    {/* <!-- * Step 4: Summary Section--> */}
    return (
        <section className="form summary-section">
            <section className="form-mobile summary-section-mobile"> {/*<!-- * Mobile Container -->*/}

                <div className="form-header">
                    <h1>Finishing up</h1>
                    <p>Double-check everything looks OK before confirming.</p>
                </div>
                
                <div className="summary-card-container">
                    <div className="summary-card">
                        <div className="selected-plan-and-price">
                            <div className="selected-plan">
                                <p className="user-plan-selected">
                                    {planName} {isYearly? '(Yearly)' : '(Monthly)'}
                                </p>
                                <button type="button" className="change-plan-btn">
                                    Change
                                </button>
                            </div>
                            <div className="selected-plan-price">
                                <span>${planPrice}/{billingCycle}</span>
                            </div>
                        </div>

                        <div className="divider"></div>

                        <div className="selected-addon-and-price-container">
                            {selectedAddons.map((addonId) => {
                                const addonData = getAddonData(addonId);
                                if (!addonData) return null;
                                const price = isYearly ? addonData.yearly : addonData.monthly;

                                return (
                                    <div className="selected-addon-and-price" key={addonId}>
                                        <span className="selected-addon">
                                            {addonData.name}
                                        </span>
                                        <span className="selected-addon-price">
                                            +${price}/{billingCycle}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="total-cost-container">
                        <span className="total-cost">
                            Total (per {billingCycle === 'yr' ? 'year' : 'month'})
                        </span>
                        <span className="total-cost-value">
                            +${total}/{billingCycle}
                        </span>
                    </div>
                </div>

            </section>

            <div className="submit-btns submit-form">
                <button type="button" className="previous-button" onClick={prevStep}>
                    Go Back
                </button>
                <button type="submit" className="next-button confirm-btn" onClick={nextStep}>
                    Confirm
                </button>
            </div>

        </section>
    )
}