import { Route, Routes } from "react-router-dom"
import HomePage from "./components/homePage"
import AboutOurCompany from "./components/aboutCompany"
import Navbar from "./components/navbar"
import OurServices from "./components/ourServices"
import OurPartners from "./components/ourPartners"

function App() {
  return(
    <>
      <Routes>
        <Route path="/" exact={true} element={<Navbar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<AboutOurCompany />}/>
          <Route path="/service" element={<OurServices />}/>
          <Route path="/project" element={<OurPartners />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App