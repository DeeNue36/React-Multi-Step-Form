export const ProgressSidebar = () => {
    {/* <!-- * Progress Section --> */}
    return (
        <section className="progress-section">
            <div className="progress-section-mobile"> {/* <!-- * Progress Section Mobile -->*/}

                <div className="progress-circle">
                    <span className="step-number active">1</span>
                    <div className="user-info-step">
                        <span className="step">Step 1</span>
                        <span className="step-name">Your Info</span>
                    </div>
                </div>
                <div className="progress-circle">
                    <span className="step-number">2</span>
                    <div className="user-info-step">
                        <span className="step">Step 2</span>
                        <span className="step-name">Select Plan</span>
                    </div>
                </div>
                <div className="progress-circle">
                    <span className="step-number">3</span>
                    <div className="user-info-step">
                        <span className="step">Step 3</span>
                        <span className="step-name">Add-ons</span>
                    </div>
                </div>
                <div className="progress-circle">
                    <span className="step-number">4</span>
                    <div className="user-info-step">
                        <span className="step">Step 4</span>
                        <span className="step-name">Summary</span>
                    </div>
                </div>

            </div>
        </section>
    )
}