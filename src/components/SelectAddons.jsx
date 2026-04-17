import { useStepProgression } from "../store/stepProgression"
import { usePlanSelection } from "../store/planSelection"
import { addons } from "../store/addonsSelection"
import { useAddonsSelection } from "../store/addonsSelection"

export const SelectAddons = () => {
    const nextStep = useStepProgression((state) => state.nextStep);
    const prevStep = useStepProgression((state) => state.prevStep);
    const isYearly = usePlanSelection((state) => state.isYearly);
    const { selectedAddons, setAddons } = useAddonsSelection();

    {/* <!-- * Step 3: Add-ons Section --> */}
    return (
        <section className="form add-ons-section">
            <section className="form-mobile add-ons-section-mobile"> {/*<!-- * Mobile Container -->*/}

                <div className="form-header">
                    <h1>Pick add-ons</h1>
                    <p>Add-ons help enhance your gaming experience.</p>
                </div>

                <div className="add-ons-container">

                    {addons.map(({id, name, monthly, yearly, description}) => (
                        <div 
                            className={`addon-card ${selectedAddons.includes(id) ? 'active' : ''}`} 
                            key={id} 
                            onClick={() => setAddons(id)}
                        >
                            <div className="addon-card-body">
                                <input 
                                    type="checkbox" 
                                    id={id} 
                                    name={`${id}-addon`} 
                                    value={id}
                                    checked={selectedAddons.includes(id)}
                                    onChange={(e) => e.stopPropagation()}  //? // prevent click from bubbling up to the parent div's onClick
                                />
                                <span className="custom-checkbox"></span>
                                <div className="addon-details">
                                    <label htmlFor={id} className="addon-card-header">
                                        {name}
                                    </label>
                                    <p className="addon-card-description">
                                        {description}
                                    </p>
                                </div>
                            </div>
                            <div className="monthly-yearly-pricing">
                                <span className="addon-price">
                                    +${isYearly ? yearly : monthly}
                                </span>
                                <span className="addon-pricing-cycle">
                                    {isYearly ? '/yr' : '/mo'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            <div className="submit-btns submit-form">
                <button type="button" className="previous-button" onClick={prevStep}>
                    Go Back
                </button>
                <button type="button" className="next-button" onClick={nextStep}>
                    Next Step
                </button>
            </div>
        </section>
    )
}