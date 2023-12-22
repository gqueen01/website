import { Link, useLocation } from "react-router-dom"
import { CgSearchLoading } from "react-icons/cg"
import { US } from 'country-flag-icons/react/3x2'
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

function Navbar() {
    const location=useLocation()
    const isHomePage=location.pathname==='/'

    return(
        <>
            <div className="navbar" style={{backgroundColor: isHomePage ? "#FFF" : "#002C4A"}}>
                <img src="/logo.png" className="logo"/>
                <div className="container">
                    <div className="links">
                        <Link to="/" className={isHomePage ? "lnk" : "change-color"}>Home</Link>
                        <NavLink to="/company" className={isHomePage ? "lnk" : "change-color"}>Company</NavLink>
                        <NavLink to="/service" className={isHomePage ? "lnk" : "change-color"}>Service</NavLink>
                        <NavLink to="/project" className={isHomePage ? "lnk" : "change-color"}>Projects</NavLink>
                    </div>
                    <div className="call">
                        <p className="phone-number" style={{color: isHomePage ? "#474747" : "#FFFFFF"}}>Call as:(+993) 12468934</p>
                        <div className={isHomePage ? "vertical-line" : "change-vertical-color"}>
                            <CgSearchLoading className="loading-icon" style={{color: isHomePage ? "#474747" : "#FFFFFF"}}/>
                        </div>
                        <US title="United States" className="usa-flag-icon"/>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar
{/* 
{isHomePage ? "loading-icon" : "change-color"} */}