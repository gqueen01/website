import { Link } from "react-router-dom"
import { CgSearchLoading } from "react-icons/cg"
import { US } from 'country-flag-icons/react/3x2'
import { MdOutlineDarkMode } from "react-icons/md"
import { CiLight } from "react-icons/ci"

function Navbar() {
    return(
        <>
            <div className="navbar">
                <img src="/logo.png" className="logo"/>
                <div className="container">
                    <div className="links">
                        <Link to="/" className="lnk">Home</Link>
                        <Link className="lnk">Company</Link>
                        <Link className="lnk">Service</Link>
                        <Link className="lnk">Projects</Link>
                    </div>
                    <div className="call">
                        <p className="phone-number">Call as:(+993) 12468934</p>
                        <div className="vertical-line">
                            <CgSearchLoading className="loading-icon"/>
                        </div>
                        <US title="United States" className="usa-flag-icon"/>
                        {/* <div onClick={props.handleChange}>{props.darkMode ? <MdOutlineDarkMode /> : <CiLight />}</div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar