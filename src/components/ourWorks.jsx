import { Link } from "react-router-dom"
import { HiArrowLongRight } from "react-icons/hi2"

function OurWorks() {
    return(
        <>
            <div style={{display: "flex", flexDirection: "column", gap: "50px"}}>
                <p className="our-works">Our Works</p>
                <div className="works">
                    <h3 className="works-head">Here are few our recent Works</h3>
                    <Link className="work-link">
                        <p>View all</p>
                        <HiArrowLongRight />
                    </Link>
                </div>
                <div className="images">
                    <div style={{display: "flex", gap: "45px"}}>
                        <div style={{display: "flex", flexDirection: "column", gap: "50px"}}>
                            <div>
                                <img src="/work1.png" className="work-img"/>
                                <h3 className="works-name">Futbol federasiyanyn resmi sayty</h3>
                                <p className="work-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <div>                            
                                <img src="/work3.png" className="work-img"/>
                                <h3 className="works-name">Podcast App</h3>
                                <p className="work-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>

                        <div style={{display: "flex", flexDirection: "column", gap: "50px"}}>
                            <div>                            
                                <img src="/work2.png" className="work-img" />
                                <h3 className="works-name">Milli hasap</h3>
                                <p className="work-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <div>                            
                                <img src="/work4.png" className="work-img"/>
                                <h3 className="works-name">Service Provider App</h3>
                                <p className="work-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurWorks