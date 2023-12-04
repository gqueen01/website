import Navbar from "./navbar"
import Main from "./main"
import AboutOurCompany from "./aboutCompany"
import OurPartners from "./ourPartners"
import OurServices from "./ourServices"
import Footer from "./footer"
import OurWorks from "./ourWorks"

function HomePage() {
    
    return(
        <>
            <div style={{display: "flex", flexDirection: "column", gap: "50px"}}>
                <div style={{display: "flex", flexDirection: "column", gap: "150px", padding: "0px 60px"}}>
                    <Navbar />
                    <Main />
                    <AboutOurCompany />
                    <OurPartners />
                    <OurServices />
                    <OurWorks />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default HomePage