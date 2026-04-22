

export const ConfirmationModal = () => {
    return (
        <>
            <div className="close-modal"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill-rule="evenodd" className="close-modal-icon">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"/>
                </svg>
            </div>

            <div className="confirmation-modal-details">
                <div className="modal-header">
                    <h3>Confirm Your Subscription 
                        <span></span>
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
                            <div className="confirm-personal-info-name">
                                <h5>Name</h5>
                                <span className="personal-info-name"></span>
                            </div>
                            <div className="confirm-personal-info-email">
                                <h5>Email</h5>
                                <span className="personal-info-email"></span>
                            </div>
                            <div className="confirm-personal-info-phone">
                                <h5>Phone</h5>
                                <span className="personal-info-phone"></span>
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
                                <span className="plan-name"></span>
                            </div>

                            <div className="confirm-plan-price">
                                <span className="plan-price"></span>
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
                        <div className="confirm-add-ons-body"></div>

                        <div className="confirm-divider">
                            <hr/>
                        </div>

                        {/* <!-- * Confirm Total --> */}
                        <div className="confirm-total">
                            <h4>Total</h4>
                            <div className="confirm-total-amount">
                                <span className="total-amount"></span>
                            </div>
                        </div>

                    </main>

                </div>

                <div className="confirm-button-container">
                    <button className="confirm-button">
                        Confirm
                    </button>
                </div>

            </div>
        </>
    )

}