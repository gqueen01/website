import { MdOutlineDoubleArrow } from "react-icons/md"

function AboutOurCompany() {
    return(
        <>
            <div className="company-container">
                <div>
                    <div className="company-icon">
                        <h4 className="company-head">About Our Company</h4>
                        <MdOutlineDoubleArrow className="double-arrow-icon"/>
                    </div>
                    <div className="horizontal-line"></div>
                </div>

                <div className="company-section">
                    <div>
                        <img src="/aboutcompany.png" className="company-img"/>
                        <div style={{position: "relative", width: "580px"}}>
                            <img src="/aboutcompanyshadow.png" className="company-shadow" />
                            <img src="/group.png" className="company-dark-mode-img"/>
                        </div>
                    </div>
                    <div className="company-text-section">
                        <div className="company-text">
                            <div className="text-vertical-line"></div>
                            <div className="text-div">
                                <h3 className="text-head">Why choose us?</h3>
                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="company-text">
                            <div className="text-vertical-line"></div>
                            <div className="text-div">
                                <h3 className="text-head">What to Expect?</h3>
                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="company-text">
                            <div className="text-vertical-line"></div>
                            <div className="text-div">
                                <h3 className="text-head">What We Deliver?</h3>
                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutOurCompany