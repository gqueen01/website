import { Link } from "react-router-dom"
import { FaStarOfLife } from "react-icons/fa"
import { HiArrowLongRight } from "react-icons/hi2"

function OurServices() {
    return(
        <>
            <div className="service-container">
                <div>
                    <div className="service-icon">
                        <h4 className="service-head">Our Service</h4>
                        <FaStarOfLife className="star-icon"/>
                    </div>
                    <div className="horizontal-line"></div>
                </div>

                <div className="service-text-field">
                    <div className="texts">
                        <div className="service-png-div">
                            <img src="/service1.png" className="service-png"/>
                            <img src="/service4.png" className="frame-png" />
                        </div>
                        <h3 className="service-text-head">Development of websites of any complexity</h3>
                        <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div>
                            <Link className="service-link">Learn more <HiArrowLongRight /></Link>
                        </div>
                    </div>

                    <div className="texts">
                        <div className="service-png-div">
                            <img src="/service2.png" className="service-png"/>
                            <div style={{position: "relative"}}>
                                <img src="/servicebackground.png" className="service-background" />
                                <img src="/service5.png" className="service-dark-mode-png" />
                            </div>
                        </div>
                        <h3 className="service-text-head">Mobile application development</h3>
                        <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div>
                            <Link className="service-link">Learn more <HiArrowLongRight /></Link>
                        </div>
                    </div>

                    <div className="texts">
                        <div className="service-png-div">
                            <img src="/service3.png" className="service-png"/>
                            <div style={{position: "relative"}}>
                                <img src="/servicebackground.png" className="service-background" />
                                <img src="/service6.png" className="service-dark-mode-png" />
                            </div>
                        </div>
                        <h3 className="service-text-head">Application Design UI UX</h3>
                        <p className="service-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div>
                            <Link className="service-link">Learn more <HiArrowLongRight /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServices