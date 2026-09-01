import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import ContactUsPage from './pages/ContactUsPage'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import RegistrationIssuesPage from './pages/RegistrationIssuesPage'

function App() {
  return (
    <main id="top">
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/help/registration" element={<RegistrationIssuesPage />} />
        </Routes>
      </div>
      <Footer />
    </main>
  )
}

export default App
