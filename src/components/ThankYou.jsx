import thankYou from '/public/Images/icon-thank-you.svg'

export const ThankYou = () => {
    {/* <!-- * Step 5: Thank You Section --> */}
    return (
        <section className="form form-mobile thank-you-section">
            <img src={thankYou} alt="Thank You Image"/>
                <h2 className="thank-you-text">Thank you!</h2>
                <p className="thank-you-paragraph">
                    Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
                    please feel free to email us at <a href="mailto:support@loremgaming.com">support@loremgaming.com</a>
                </p>
        </section>
    )
}