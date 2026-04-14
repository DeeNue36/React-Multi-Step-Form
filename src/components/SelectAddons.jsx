import { useStepProgress } from "../store/stepProgress"
import { usePlanSelection } from "../store/planSelection"
import { addons } from "../store/addonsSelection"
import { useAddonsSelection } from "../store/addonsSelection"

export const SelectAddons = () => {
    const nextStep = useStepProgress((state) => state.nextStep);
    const prevStep = useStepProgress((state) => state.prevStep);
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

                    {/* <!-- * Addon Option Card 1: Online Service --> */}
                    {/* <div className="addon-card">
                        <div className="addon-card-body">
                            <input type="checkbox" id="online-service" name="online-service-addon" value="online-service"/>
                            <span className="custom-checkbox"></span>
                            <div className="addon-details">
                                <label for="online-service" className="addon-card-header">
                                    Online service
                                </label>
                                <p className="addon-card-description">
                                    Access to multiplayer games
                                </p>
                            </div>
                        </div>
                        <div className="monthly-yearly-pricing">
                            <span className="addon-price">
                                +$1
                            </span>
                            <span className="addon-pricing-cycle">
                                /mo
                            </span>
                        </div>
                    </div> */}

                    {/* <!-- * Addon Option Card 2: Larger Storage --> */}
                    {/* <div className="addon-card">
                        <div className="addon-card-body">
                            <input type="checkbox" id="larger-storage" name="larger-storage-addon" value="larger-storage"/>
                            <span className="custom-checkbox"></span>
                            <div className="addon-details">
                                <label for="larger-storage" className="addon-card-header">
                                    Larger Storage
                                </label>
                                <p className="addon-card-description">
                                    Extra 1TB of cloud save
                                </p>
                            </div>
                        </div>
                        <div className="monthly-yearly-pricing">
                            <span className="addon-price">
                                +$2
                            </span>
                            <span className="addon-pricing-cycle">
                                /mo
                            </span>
                        </div>
                    </div> */}

                    {/* <!-- * Addon Option Card 3: Customizable Profile --> */}
                    {/* <div className="addon-card">
                        <div className="addon-card-body">
                            <input type="checkbox" id="customizable-profile" name="customizable-profile-addon" value="customizable-profile"/>
                            <span className="custom-checkbox"></span>
                            <div className="addon-details">
                                <label for="customizable-profile" className="addon-card-header">
                                    Customizable Profile
                                </label>
                                <p className="addon-card-description">
                                    Custom theme on your profile
                                </p>
                            </div>
                        </div>
                        <div className="monthly-yearly-pricing">
                            <span className="addon-price">
                                +$2
                            </span>
                            <span className="addon-pricing-cycle">
                                /mo
                            </span>
                        </div>
                    </div> */}
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