import { useStepProgress } from "../store/stepProgress";
import { usePlanSelection } from "../store/planSelection";
import { useAddonsSelection } from "../store/addonsSelection";

export const PurchaseSummary = () => {
    const nextStep = useStepProgress((state) => state.nextStep);
    const prevStep = useStepProgress((state) => state.prevStep);

    const { selectedPlan, isYearly } = usePlanSelection();
    const selectedAddons = useAddonsSelection((state) => state.selectedAddons);

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
                                    {selectedPlan} {isYearly? '(Yearly)' : '(Monthly)'}
                                </p>
                                <button type="button" className="change-plan-btn">
                                    Change
                                </button>
                            </div>
                            <div className="selected-plan-price">
                                <span></span>
                            </div>
                        </div>

                        <div className="divider"></div>

                        <div className="selected-addon-and-price-container">
                            {selectedAddons.map((addon) => (
                                <div className="selected-addon-and-price" key={addon}>
                                    <span className="selected-addon">{addon}</span>
                                    <span className="selected-addon-price">$</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="total-cost-container">
                        <span className="total-cost"></span>
                        <span className="total-cost-value"></span>
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