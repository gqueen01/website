import Main from "./main"
import AboutOurCompany from "./aboutCompany"
import OurPartners from "./ourPartners"
import OurServices from "./ourServices"
import OurWorks from "./ourWorks"

function HomePage() {
    
    return(
        <> 
            <div style={{display: "flex", flexDirection: "column", gap: "150px", padding: "0px 60px"}}>
                <Main />
                <AboutOurCompany />
                <OurPartners />
                <OurServices />
                <OurWorks />
            </div>
        </>
    )
}

export default HomePage