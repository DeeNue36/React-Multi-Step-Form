import './App.css'
import arcade from '../public/Images/icon-arcade.svg'
import advanced from '../public/Images/icon-advanced.svg'
import pro from '../public/Images/icon-pro.svg'

function App() {

  return (
    <>
      <div className="form-container">
          {/* <!-- * Progress Section --> */}
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


          {/* <!-- * Main Form Section --> */}
          <main className="form-main-section">

              {/* <!-- * Step 1: Personal Info Form --> */}
              <form className="form personal-info-form">

                  <section className=" form-mobile personal-info-form-mobile">  {/*<!-- * Personal Info Form Mobile Container -->*/}

                      <div className="form-header">
                          <h1>Personal info</h1>
                          <p>Please provide your name, email address, and phone number.</p>
                      </div>
                      <div className="form-body">
                          <div className="input-container">
                              <div className="label-and-error">
                                  <label for="name">Name</label>
                                  <span className="error-message"></span>
                              </div>
                              <input type="text" id="name" className="name" name="name" placeholder="e.g. Stephen King" required autocomplete="on"/>
                          </div>
                          <div className="input-container">
                              <div className="label-and-error">
                                  <label for="email">Email Address</label>
                                  <span className="error-message"></span>
                              </div>
                              <input type="email" id="email" className="email" name="email" placeholder="e.g. stephenking@lorem.com" required autocomplete="on"/>
                          </div>
                          <div className="input-container">
                              <div className="label-and-error">
                                  <label for="phone">Phone Number</label>
                                  <span className="error-message"></span>
                              </div>
                              <input type="tel" id="phone" className="phone-no" name="phone" placeholder="e.g. +1 234 567 890" required autocomplete="on"/>
                          </div>
                      </div>

                  </section>

                  <div className="submit-form">
                      <button type="submit" className="next-button">
                          Next Step
                      </button>
                  </div>
              </form>


              {/* <!-- * Step 2: Select Plan Section --> */}
              <section className="form select-plan-section hidden">
                  <section className="form-mobile select-plan-section-mobile">  {/*<!-- * Select Plan Form Mobile Container -->*/}

                      <div className="form-header">
                          <h1>Select your plan</h1>
                          <p>You have the option of monthly or yearly billing.</p>
                      </div>

                      <div className="form-body">
                          <span className="plan-error hidden"></span>
                          <div className="plan-container">
                              {/* <!-- * Plan Cards --> */}

                              {/* <!-- * Plan Card 1: Arcade Plan --> */}
                              <div className="plan-card">
                                  <div className="plan-card-image">
                                      <img src={arcade} alt="Arcade Plan Image"/>
                                  </div>
                                  <div className="plan-card-body">
                                      <h3 className="plan-card-header">
                                          Arcade
                                      </h3>
                                      <div className="monthly-yearly-pricing">
                                          <span className="price">
                                              $9
                                          </span>
                                          <span className="pricing-cycle">
                                              /mo
                                          </span>
                                      </div>
                                      <p className="yearly-discount-duration hidden"></p>
                                  </div>
                              </div>

                              {/* <!-- * Plan Card 2: Advanced Plan --> */}
                              <div className="plan-card">
                                  <div className="plan-card-image">
                                      <img src={advanced} alt="Advanced Plan Image"/>
                                  </div>
                                  <div className="plan-card-body">
                                      <h3 className="plan-card-header">
                                          Advanced
                                      </h3>
                                      <div className="monthly-yearly-pricing">
                                          <span className="price">
                                              $12
                                          </span>
                                          <span className="pricing-cycle">
                                              /mo
                                          </span>
                                      </div>
                                      <p className="yearly-discount-duration hidden"></p>
                                  </div>
                              </div>

                              {/* <!-- * Plan Card 3: Pro Plan --> */}
                              <div className="plan-card">
                                  <div className="plan-card-image">
                                      <img src={pro} alt="Pro Plan Image"/>
                                  </div>
                                  <div className="plan-card-body">
                                      <h3 className="plan-card-header">
                                          Pro
                                      </h3>
                                      <div className="monthly-yearly-pricing">
                                          <span className="price">
                                              $15
                                          </span>
                                          <span className="pricing-cycle">
                                              /mo
                                          </span>
                                      </div>
                                      <p className="yearly-discount-duration hidden"></p>
                                  </div>
                              </div>
                          </div>

                          {/* <!-- * Billing Options: Monthly and Yearly --> */}
                          <div className="billing-container">
                              <div className="billing-option-container">
                                  <input type="radio" id="monthly" name="billing" value="monthly" checked/>
                                  <label for="monthly">Monthly</label>
                              </div>

                              <div className="toggle-container">
                                  <label for="billing-toggle">Toggle</label>
                                  <input type="range" id="billing-toggle" name="billing toggle" min="0" max="1" step="1" value="0"/>
                                  <div className="toggle-thumb"></div>
                              </div>

                              <div className="billing-option-container">
                                  <input type="radio" id="yearly" name="billing" value="yearly"/>
                                  <label for="yearly">Yearly</label>
                              </div>
                          </div>
                      </div>

                  </section>

                  <div className="submit-btns submit-form">
                      <button type="button" className="previous-button">
                          Go Back
                      </button>
                      <button type="button" className="next-button">
                          Next Step
                      </button>
                  </div>
              </section>


              {/* <!-- * Step 3: Add-ons Section --> */}
              <section className="form add-ons-section hidden">
                  <section className="form-mobile add-ons-section-mobile"> {/*<!-- * Add-ons Section Container Mobile -->*/}

                      <div className="form-header">
                          <h1>Pick add-ons</h1>
                          <p>Add-ons help enhance your gaming experience.</p>
                      </div>

                      <div className="add-ons-container">

                          {/* <!-- * Addon Option Card 1: Online Service --> */}
                          <div className="addon-card">
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
                          </div>

                          {/* <!-- * Addon Option Card 2: Larger Storage --> */}
                          <div className="addon-card">
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
                          </div>

                          {/* <!-- * Addon Option Card 3: Customizable Profile --> */}
                          <div className="addon-card">
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
                          </div>
                      </div>

                  </section>

                  <div className="submit-btns submit-form">
                      <button type="button" className="previous-button">
                          Go Back
                      </button>
                      <button type="button" className="next-button">
                          Next Step
                      </button>
                  </div>
              </section>


              {/* <!-- * Step 4: Summary Section--> */}
              <section className="form summary-section hidden">
                  <section className="form-mobile summary-section-mobile"> {/*<!-- * Summary Section Container on Mobile  -->*/}

                      <div className="form-header">
                          <h1>Finishing up</h1>
                          <p>Double-check everything looks OK before confirming.</p>
                      </div>
                      <div className="summary-card-container">
                          <div className="summary-card">
                              <div className="selected-plan-and-price">
                                  <div className="selected-plan">
                                      <p className="user-plan-selected"></p>
                                      <button type="button" className="change-plan-btn">
                                          Change
                                      </button>
                                  </div>
                                  <div className="selected-plan-price">
                                      <span></span>
                                  </div>
                              </div>
                              <div className="divider"></div>
                              <div className="selected-addon-and-price-container"></div>
                          </div>
                          <div className="total-cost-container">
                              <span className="total-cost"></span>
                              <span className="total-cost-value"></span>
                          </div>
                      </div>

                  </section>

                  <div className="submit-btns submit-form">
                      <button type="button" className="previous-button">
                          Go Back
                      </button>
                      <button type="submit" className="next-button">
                          Confirm
                      </button>
                  </div>

              </section>

              {/* <!-- * Step 5: Thank You Section --> */}
              <section className="form form-mobile thank-you-section hidden"></section>
          </main>
      </div>
    </>
  )
}

export default App
