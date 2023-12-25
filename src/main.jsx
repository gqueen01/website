import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './components/navbar.css'
import './components/main.css'
import './components/aboutCompany.css'
import './components/ourPartners.css'
import './components/ourServices.css'
import './components/footer.css'
import './components/ourWorks.css'
import './components/aboutCompanyPage.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
