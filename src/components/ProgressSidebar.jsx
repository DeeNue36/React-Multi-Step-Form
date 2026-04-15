import { useStepProgress } from "../store/stepProgress";

export const ProgressSidebar = () => {
    const { currentStep, handleStepClick } = useStepProgress();

    {/* <!-- * Progress Section --> */}
    return (
        <section className="progress-section">
            <div className="progress-section-mobile"> {/* <!-- * Mobile Container-->*/}

                {[1,2,3,4].map(num => (
                    <div key={num} className="progress-circle">
                        <span 
                            className={`step-number ${currentStep === num ? 'active' : ''}`}
                            onClick={() => handleStepClick(num)}
                        >
                                {num}
                        </span>
                        <div className="user-info-step">
                            <span className="step">{`Step ${num}`}</span>
                            <span className="step-name">{
                            ['Your Info','Select Plan','Add-ons','Summary'][num-1]
                            }</span>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}