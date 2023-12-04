import { Link } from "react-router-dom"

function Footer() {
    return(
        <>
            <div>
                <div className="footer-container">
                    <div className="footer-horizontal-line"></div>
                    <div className="footer-information">
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <div style={{width: "40%", margin: "0px 0px 0px 15%"}}>
                                <img src="/logo.png" className="footer-logo" />
                                <p className="footer-prg">We work with a passion of taking challenges and creating new ones in advertising sector</p>
                                <p className="footer-prg2">terms of service privacy policy</p>
                            </div>
                            <div className="footer-links">
                                <h3 className="quick-link">Quick link</h3>
                                <Link className="footer-link">Home</Link>
                                <Link className="footer-link">About us</Link>
                                <Link className="footer-link">Service</Link>
                                <Link className="footer-link">Projects</Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="contact-info">Contact information</h3>
                            <div className="comp-info">
                                <ul style={{padding: "0px"}}>
                                    <li>
                                        <p className="place">Turkmenistan, Asgabat s, koce 2127 (10 yyl abadancylyk), 25.</p>
                                    </li>
                                </ul>
                                <p className="phone">(+993)12468934</p>
                                <p className="email">Milligoshant@mail.ru</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-horizontal-line"></div>
                </div>
                <p className="rights">All rights reserved</p>
            </div>
        </>
    )
}

export default Footer