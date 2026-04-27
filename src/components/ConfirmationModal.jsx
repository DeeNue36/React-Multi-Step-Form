import { useStepProgression } from "../store/stepProgression";
import { useInputValidation } from "../store/inputValidation";
import { usePlanSelection } from "../store/planSelection";
import { useAddonsSelection } from "../store/addonsSelection";
import { useDisplayPurchaseSummary } from "../store/displayPurchaseSummary";

export const ConfirmationModal = () => {
    const setCurrentStep = useStepProgression((state) => state.setCurrentStep);

    const { nameValue, emailValue, phoneValue } = useInputValidation();

    const { isYearly, getSelectedPlanPrice, getSelectedPlanName } = usePlanSelection();
    const { selectedAddons, getTotalAddonsPrice, getAddonData } = useAddonsSelection();

    const { setShowModal } = useDisplayPurchaseSummary();

    const planName = getSelectedPlanName();
    const planPrice = getSelectedPlanPrice();
    const addonsTotalPrice = getTotalAddonsPrice(isYearly);
    const total = planPrice + addonsTotalPrice;
    const billingCycle = isYearly ? 'yr' : 'mo';


    const handleConfirmation = () => {
        setShowModal(false);
        setCurrentStep(5); // Thank You Section
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }


    return (
        <>
            <div className="confirmation-modal-overlay" onClick={handleCloseModal}>
                <div className="confirmation-modal-container" onClick={(e) => e.stopPropagation()}>

                    <div className="close-modal" onClick={handleCloseModal}> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fillRule="evenodd" className="close-modal-icon">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"/>
                        </svg>
                    </div>

                    <div className="confirmation-modal-details">
                        <div className="modal-header">
                            <h3>Confirm Your Subscription 
                                <span> {nameValue.split(' ')[0]}</span>
                            </h3>
                            <p>
                                One last check! Please  ensure your personal details entered are all correct and confirm that you have selected your preferred gaming plan and add-ons (if any). If everything looks good please go ahead and confirm your subscription below. Thank you for choosing Lorem Gaming!
                            </p>
                        </div>

                        <div className="modal-body">
                            {/* <!--* Personal Info --> */}
                            <aside className="confirm-personal-info-container">
                                <h3>Personal Info</h3>
                                <div className="confirm-personal-info-body">
                                    <div className="confirm-personal-detail">
                                        <h5>Name</h5>
                                        <span>{nameValue}</span>
                                    </div>
                                    <div className="confirm-personal-detail">
                                        <h5>Email</h5>
                                        <span>{emailValue}</span>
                                    </div>
                                    <div className="confirm-personal-detail">
                                        <h5>Phone</h5>
                                        <span>{phoneValue}</span>
                                    </div>
                                </div>
                            </aside>
                            
                            <main className="confirm-plan-and-addons-container">
                                {/* <!-- * Confirm Selected Plan --> */}
                                <div className="confirm-plan-header">
                                    <h4>Plan</h4>
                                    <h4>Price</h4>
                                </div>

                                <div className="confirm-plan-body">
                                    <div className="confirm-plan-name">
                                        <span className="plan-name">{planName} {isYearly ? '(Yearly)' : '(Monthly)'}</span>
                                    </div>

                                    <div className="confirm-plan-price">
                                        <span className="plan-price">{planPrice}/{billingCycle}</span>
                                    </div>
                                </div>

                                <div className="confirm-divider">
                                    <hr/>
                                </div>

                                {/* <!-- * Confirm Selected Add-ons Header --> */}
                                <div className="confirm-add-ons-header">
                                    <h4>Add-ons</h4>
                                </div>

                                {/* <!-- * Confirm Selected Add-ons Body --> */}
                                <div className="confirm-add-ons-body">
                                    {selectedAddons.map((addonId) => {
                                        const addon = getAddonData(addonId);
                                        if (!addon) return null;
                                        const addonPrice = isYearly ? addon.yearly : addon.monthly;

                                        return (
                                            <div className="confirm-add-on" key={addon.id}>
                                                <span className="add-on-name">{addon.name}</span>
                                                <span className="add-on-price">{addonPrice}/{billingCycle}</span>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className="confirm-divider">
                                    <hr/>
                                </div>

                                {/* <!-- * Confirm Total --> */}
                                <div className="confirm-total">
                                    <h4>Total</h4>
                                    <div className="confirm-total-amount">
                                        <span className="total-amount">{total}/{billingCycle}</span>
                                    </div>
                                </div>

                            </main>

                        </div>

                        <div className="confirm-button-container">
                            <button type="button" className="confirm-button" onClick={handleConfirmation}>
                                Confirm
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )

}