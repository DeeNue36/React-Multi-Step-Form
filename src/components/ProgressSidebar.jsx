import { useStepProgress } from "../store/stepProgress"

export const ProgressSidebar = () => {
    const currentStep = useStepProgress((state) => state.currentStep);

    {/* <!-- * Progress Section --> */}
    return (
        <section className="progress-section">
            <div className="progress-section-mobile"> {/* <!-- * Mobile Container-->*/}

                {[1,2,3,4].map(num => (
                    <div key={num} className="progress-circle">
                    <span className={`step-number ${currentStep >= num ? 'active' : ''}`}>{num}</span>
                    <div className="user-info-step">
                        <span className="step">{`Step ${num}`}</span>
                        <span className="step-name">{
                        ['Your Info','Select Plan','Add-ons','Summary'][num-1]
                        }</span>
                    </div>
                    </div>
                ))}

                {/* <div className="progress-circle">
                    <span className={`step-number ${currentStep >= 1 ? 'active' : ''}`}>1</span>
                    <div className="user-info-step">
                        <span className="step">Step 1</span>
                        <span className="step-name">Your Info</span>
                    </div>
                </div>
                <div className="progress-circle">
                    <span className={`step-number ${currentStep >= 2 ? 'active' : ''}`}>2</span>
                    <div className="user-info-step">
                        <span className="step">Step 2</span>
                        <span className="step-name">Select Plan</span>
                    </div>
                </div>
                <div className="progress-circle">
                    <span className={`step-number ${currentStep >= 3 ? 'active' : ''}`}>3</span>
                    <div className="user-info-step">
                        <span className="step">Step 3</span>
                        <span className="step-name">Add-ons</span>
                    </div>
                </div>
                <div className="progress-circle">
                    <span className={`step-number ${currentStep >= 4 ? 'active' : ''}`}>4</span>
                    <div className="user-info-step">
                        <span className="step">Step 4</span>
                        <span className="step-name">Summary</span>
                    </div>
                </div> */}

            </div>
        </section>
    )
}