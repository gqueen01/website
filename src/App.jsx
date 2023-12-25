import { Route, Routes } from "react-router-dom"
import HomePage from "./components/homePage"
import Navbar from "./components/navbar"
import OurServices from "./components/ourServices"
import OurPartners from "./components/ourPartners"
import AboutCompanyLink from "./components/aboutCompanyPage"
import Footer from "./components/footer"

function App() {
  return(
    <>
      <div style={{display: "flex", flexDirection: "column", gap: "50px"}}>
        <Routes>
          <Route path="/" exact={true} element={<Navbar />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/company" element={<AboutCompanyLink />}/>
            <Route path="/service" element={<OurServices />}/>
            <Route path="/project" element={<OurPartners />}/>
          </Route>
          <Route />
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App