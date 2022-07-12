import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { AboutUsPage } from './pages/AboutUsPage'
import { LoginPage } from './pages/LoginPage'
import { ProfilePage } from './pages/ProfilePage'
import { ContactPage } from './pages/ContactPage'
import { FormPage } from './pages/FormPage'

import './global.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/sobre-nos" element={<AboutUsPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/perfil" element={<ProfilePage/>} />
        <Route path="/form" element={<FormPage/>} />
        <Route path="/contato" element={<ContactPage/>} />
      </Routes>
    </Router>
  )
}

export default App
