import { LuArrowDownLeft } from "react-icons/lu";

function OurPartners() {
    return(
        <>
            <div className="partners-container">
                <div>
                    <div className="head-icon">
                        <h4 className="partners-head">Our Partners</h4>
                        <LuArrowDownLeft className="arrow-icon" />
                    </div>
                    <div className="horizontal-line"></div>
                </div>
                <div className="partners-logo">
                    <div className="logo-div">
                        <img src="/howa.png" className="prt-logo"/>
                    </div>

                    <div className="logo-div">
                        <img src="/demiryol.png" className="prt-logo"/>
                    </div>

                    <div className="logo-div">
                        <img src="/pocta.png" className="prt-logo"/>
                    </div>

                    <div className="logo-div">
                        <img src="/taxi.png" className="prt-logo"/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OurPartners